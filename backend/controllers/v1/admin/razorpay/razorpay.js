const { config } = require("process");
// const chalk = require("chalk");
const crypto = require("crypto");
const { OPTIONS, generateResponse } = require("../../../../config/options/global.options");
const MESSAGES = require("../../../../config/options/messages.options");
const RazorPayRepository = require("../../../../models/repository/razorpay");
const resCode = MESSAGES.resCode;

/** Step ONE */
// to create the order inside the razorpay
exports.createRazorPayOrder = async (req, res) => {
    try {
        const options = {
            amount: req.body.amount * 100, // amount in the smallest currency unit
            currency: "INR",
            receipt: `${req.body.orderId}`,
        };
        console.log("options", options);
        let razorPayOrder = await RazorPayRepository.createOrder(options);
        console.log(("Payment Order"), razorPayOrder);
        return res.status(resCode.HTTP_OK).json(
            generateResponse(resCode.HTTP_OK, {
                data: {
                    value: razorPayOrder,
                },
            })
        );
    } catch (e) {
        customErrorLogger(e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.status(resCode.HTTP_INTERNAL_SERVER_ERROR).json(
            generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, errors)
        );
        throw new Error(e);
    }
};

/** Step TWO */
// to verify the payment
exports.verifyPayment = async (req, res) => {
    try {
        let hmac = crypto.createHmac("sha256", RazorPayRepository.instance.key_secret);
        data = hmac.update(req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id);
        generated_signature = data.digest("hex");
        console.log(generated_signature, req.body.razorpay_signature);
        if (generated_signature === req.body.razorpay_signature) {
            const paymentData = await RazorPayRepository.fetchPayment(req.body.razorpay_payment_id);

            // console.log(chalk.yellow("Verify payment Order"), paymentData);
            /** Step THREE */
            const message = "Transaction completed";
            return res.status(resCode.HTTP_OK).json(
                generateResponse(resCode.HTTP_OK, {
                    message,
                    data: paymentData,
                })
            );
        } else {
            const amount = req.body.amount * 100;
            const refundResult = await RazorPayRepository.refund(req.body.razorpay_payment_id, amount);
            // console.log(chalk.yellow("Refund result"), refundResult);
            const message = "Amount refunded";
            return res.status(resCode.HTTP_OK).json(
                generateResponse(resCode.HTTP_OK, {
                    message,
                    data: null,
                })
            );
        }
    } catch (e) {
        customErrorLogger(e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.status(resCode.HTTP_INTERNAL_SERVER_ERROR).json(
            generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, errors)
        );
        throw new Error(e);
    }
};
