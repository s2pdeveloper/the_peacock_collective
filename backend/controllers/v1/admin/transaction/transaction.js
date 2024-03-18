const sequelize = require("sequelize");
const transaction = require("../../../../models").Transactions;
const time = require("../../../../config/middlewares/time");
const subscriptionMapping = require("../../../../models").SubscriptionMapping;
const studentDetails = require("../../../../models").StudentDetails;
const subscription = require("../../../../models").Subscription; 
const {OPTIONS, generateResponse} = require("../../../../config/options/global.options");
const MESSAGES = require("../../../../config/options/messages.options");
var Razorpay = require("razorpay");
const resCode = MESSAGES.resCode;
const Op = sequelize.Op;
const crypto = require("crypto");
const studentNotification = require("../../../../models").StudentNotification;
const notification = require("../../../../shared/repositories/notification.repository");
const {getDeviceByStudentId} = require("../../../../config/middlewares/utils");

var instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});
const transactionObj = {
    createOrder: async (req, res) => {
        try {
            let orderObj = {};
            orderObj.amount = req.params.amount * 100;
            orderObj.currency = "INR";
            orderObj.receipt = "ReceiptNo" + Math.floor(1000 + Math.random() * 9000).toString();
            instance.orders.create(orderObj, async (err, order) => {
                if (!err) {
                    let transactionObj = new transaction();
                    order.studentId = req.user.id;
                    order.uuid = process.env.RAZORPAY_KEY_ID;
                    for (let i = Object.keys(order).length - 1; i >= 0; i--) {
                        let key = Object.keys(order)[i];
                        if (key == "id") {
                            transactionObj["transactionId"] = order[key];
                            transactionObj["transactionBy"] = "Online";
                            transactionObj[key] = req.body[key];
                        } else {
                            transactionObj[key] = order[key];
                        }
                    }
                    await transactionObj.save();
                    return res.status(resCode.HTTP_OK).json(generateResponse(resCode.HTTP_OK, order));
                } else {
                    const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
                    res.status(resCode.HTTP_INTERNAL_SERVER_ERROR).json(
                        generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, errors)
                    );
                    throw new Error(err);
                }
            });
        } catch (e) {
            const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
            res.status(resCode.HTTP_INTERNAL_SERVER_ERROR).json(
                generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, errors)
            );
            throw new Error(e);
        }
    },

    getAllTransactionById: async (req, res) => {
        try {
            let offset = req.body.page || 1;
            let limit = offset * req.body.pageSize || 10;
            let id = req.user.id;
            if (!id) {
                const error = MESSAGES.apiErrorStrings.INVALID_REQUEST;
                return res.status(resCode.HTTP_BAD_REQUEST).json(generateResponse(resCode.HTTP_BAD_REQUEST, error));
            }
            let whereQuery = {[Op.and]: [{studentId: id}]};
            if (req.query.search) {
                whereQuery = {
                    //for search
                    [Op.or]: [],
                };
            }
            let {count, rows} = await transaction.findAndCountAll({
                where: whereQuery,
                order: [["createdAt", "DESC"]],
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
                offset: 0,
                limit: parseInt(limit),
            });
            if (!rows) {
                return res.status(resCode.HTTP_BAD_REQUEST).json(
                    generateResponse(resCode.HTTP_BAD_REQUEST, {
                        message: MESSAGES.apiSuccessStrings.TRANSACTION_DETAILS("empty"),
                    })
                );
            }
            let payload = {
                count: count,
                transaction: rows,
            };

            return res.status(resCode.HTTP_OK).json(generateResponse(resCode.HTTP_OK, payload));
        } catch (e) {
            const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
            res.status(resCode.HTTP_INTERNAL_SERVER_ERROR).json(
                generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, errors)
            );
            throw new Error(e);
        }
    },

    verify: async (req, res) => {
        try {
            var Obj = req.body;
            let query = {
                where: {
                    transactionId: Obj.orderId,
                },
            };
            let existing = await transaction.findOne(query);
            existing.paymentId = Obj.razorpay_payment_id;
            existing.signature = Obj.razorpay_signature;
            existing.razorPayOrderId = Obj.razorpay_order_id;
            existing.status = "Success";
            let data = Obj.razorpay_order_id + "|" + Obj.razorpay_payment_id;
            const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
            hmac.update(data.toString());
            let generatedSignature = hmac.digest("hex");
            if (generatedSignature === Obj.razorpay_signature) {
                existing.status = "Success";
                await existing.save();
                let expiryDate = "";
                let subscribe = await subscription.findOne({
                    where: {
                        id: Obj.subscriptionId,
                    },
                });
                if (subscribe.subscriptionType == "Year") {
                    expiryDate = time.addDays(subscribe.validity * 365);
                }
                if (subscribe.subscriptionType == "Month") {
                    expiryDate = time.addDays(subscribe.validity * 30);
                }
                let subscriptionData = await subscriptionMapping.findOne({
                    where: {
                        studentId: req.user.id,
                    },
                });
                if (!subscriptionData) {
                    let data = new subscriptionMapping();
                    data.studentId = req.user.id;
                    data.subscriptionId = Obj.subscriptionId;
                    data.expiryDate = expiryDate;
                    await data.save();
                } else {
                    subscriptionData.createdAt = time.getDateTime();
                    subscriptionData.updatedAt = time.getDateTime();
                    subscriptionData.subscriptionId = Obj.subscriptionId;
                    subscriptionData.expiryDate = expiryDate;
                    await subscriptionData.save();
                }
                let studentData = await studentDetails.findOne({
                    where: {
                        id: req.user.id,
                    },
                });
                studentData.planPurchaseDate = time.getDateTime();
                studentData.expiryDate = expiryDate;
                await studentData.save();
                let studentDeviceData = await getDeviceByStudentId(req.user.id);
                await studentNotification.create({
                    studentId: req.user.id,
                    title: MESSAGES.pushNotification.SUBSCRIPTION_PURCHASE,
                    message: MESSAGES.pushNotification.SUBSCRIPTION_PURCHASE_MSG(studentData.name, subscribe.planType),
                });
                let data = {
                    heading: MESSAGES.pushNotification.SUBSCRIPTION_PURCHASE,
                    description: MESSAGES.pushNotification.SUBSCRIPTION_PURCHASE_MSG(
                        studentData.name,
                        subscribe.planType
                    ),
                    type: "Purchase",
                };
                if (
                    studentDeviceData &&
                    studentDeviceData.userDeviceDetails &&
                    studentDeviceData.userDeviceDetails.deviceId
                ) {
                    notification([{deviceId: studentDeviceData.userDeviceDetails.deviceId}], data);
                }
            } else {
                existing.status = "Fail";
                await existing.save();
            }
            return res.status(resCode.HTTP_OK).json(
                generateResponse(resCode.HTTP_OK, {
                    message: existing.status,
                })
            );
        } catch (e) {
            const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
            res.status(resCode.HTTP_INTERNAL_SERVER_ERROR).json(
                generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, errors)
            );
            throw new Error(e);
        }
    },
    getOrderByOrderId: async (req, res) => {
        try {
            let id = req.query.orderId;
            if (!id) {
                const error = MESSAGES.apiErrorStrings.INVALID_REQUEST;
                return res.status(resCode.HTTP_BAD_REQUEST).json(generateResponse(resCode.HTTP_BAD_REQUEST, error));
            }
            let query = {
                where: {
                    orderId: id,
                },
            };

            let existing = await transaction.findOne(query);
            if (!existing) {
                let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("The Order");
                return res
                    .status(resCode.HTTP_BAD_REQUEST)
                    .json(generateResponse(resCode.HTTP_BAD_REQUEST, errors, MESSAGES.errorTypes.OAUTH_EXCEPTION));
            }
            return res.status(resCode.HTTP_OK).json(generateResponse(resCode.HTTP_OK, existing));
        } catch (e) {
            const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
            res.status(resCode.HTTP_INTERNAL_SERVER_ERROR).json(
                generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, errors)
            );
            throw new Error(e);
        }
    },
    refund: async (req, res) => {
        try {
            var Obj = req.body;
            let query = {
                where: {
                    paymentId: Obj.paymentId,
                },
            };
            let existing = await transaction.findOne(query);
            instance.payments.refund(existing.paymentId, {
                amount: "100",
                speed: "normal",
                notes: {
                    notes_key_1: "Beam me up Scotty.",
                    notes_key_2: "Engage",
                },
                receipt: "Receipt No. 31",
            });
        } catch (e) {
            const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
            res.status(resCode.HTTP_INTERNAL_SERVER_ERROR).json(
                generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, errors)
            );
            throw new Error(e);
        }
    },
};
module.exports = transactionObj;
