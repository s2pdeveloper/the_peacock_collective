const fs = require('fs');
const sequelize = require('sequelize');
// const db = require('../../../models');
const { Subscription, UserSubscription } = require('../../../../models');
const {
    OPTIONS,
    generateResponse,
} = require('../../../../config/options/global.options');
const PlanHelpers = require("../../../../models/helpers/plan-helpers");
const UserHelpers = require("../../../../models/helpers/user.helpers");
const RazorpayRepository = require("../../../../models/repository/razorpay");

const Utils = require("../../../../shared/utils/moment-timezone/time");
const MESSAGES = require('../../../../config/options/messages.options');
const resCode = MESSAGES.resCode;
const Op = sequelize.Op;

exports.getPlans = async (req, res) => {
    try {
        let query = {
            where: {
                status: OPTIONS.defaultStatus.ACTIVE,
            },
            attributes: { exclude: ["createdAt", "updatedAt"] },
        };
        let existingPlans = await Subscription.findAll(query);
        return res.status(resCode.HTTP_OK).json(generateResponse(resCode.HTTP_OK, existingPlans));
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.status(resCode.HTTP_INTERNAL_SERVER_ERROR).json(generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, errors));
        throw new Error(e);
    }
};
exports.currentSubscription = async (req, res) => {
    try {
        let query = {
            where: {
                status: OPTIONS.defaultStatus.ACTIVE,
                userId: req.user.id,
            },
            logging: true,
        };
        let existingSubscription = await UserSubscription.findOne(query);
        return res
            .status(resCode.HTTP_OK)
            .json(generateResponse(resCode.HTTP_OK, existingSubscription ? existingSubscription : {}));
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.status(resCode.HTTP_INTERNAL_SERVER_ERROR).json(generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, errors));
        throw new Error(e);
    }
};

exports.create = async (req, res) => {
    try {
        req.assert("subscriptionId", "subscriptionId cannot be blank").notEmpty();

        let user = await UserHelpers.userData(req.body.id);
        let errors = req.validationErrors();
        if (errors) {
            return res
                .status(resCode.HTTP_BAD_REQUEST)
                .json(generateResponse(resCode.HTTP_BAD_REQUEST, errors, MESSAGES.errorTypes.INPUT_VALIDATION));
        }
        let plan = await Subscription.findByPk(req.body.subscriptionId);

        if (!plan) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Plan");
            return res
                .status(resCode.HTTP_BAD_REQUEST)
                .json(generateResponse(resCode.HTTP_BAD_REQUEST, errors, MESSAGES.errorTypes.ENTITY_NOT_FOUND));
        }

        let existingPlan = await PlanHelpers.checkRunningPlan(user.id);
        let validFrom = Utils.getUTCDateTime();
        if (existingPlan) {
            validFrom = existingPlan.validTill;
        }
        let period = "y";
        if (plan.period === "weekly") {
            period = "w";
        } else if (plan.period === "monthly") {
            period = "M";
        }
        const validTill = Utils.addUTCDateTime(validFrom, plan.interval, period);
        req.body["validTill"] = validTill;
        req.body["validFrom"] = validFrom;
        let razorpayResponse = plan.totalAmount > 0 ? await RazorpayRepository.createSubscription(req.body) : {};
        const subscription = await UserSubscription.create({
            validFrom: validFrom,
            validTill: validTill,
            isPaid: req.body.isPaid,
            amount: plan.amount,
            discountPercentage: plan.discountPercentage,
            totalAmount: plan.totalAmount,
            planId: plan.id,
            userId: user.id,
            status: existingPlan ? OPTIONS.defaultStatus.INACTIVE : OPTIONS.defaultStatus.ACTIVE,
            razorpayPlanId: razorpayResponse ? razorpayResponse.id : null,
            additionalDetails: plan.additionalDetails,
        });
        return res.status(resCode.HTTP_OK).json(
            generateResponse(resCode.HTTP_OK, {
                message: MESSAGES.apiSuccessStrings.CREATED("Subscription"),
                data: subscription.toJSON(),
            })
        );
    } catch (e) {
        customErrorLogger(e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.status(resCode.HTTP_INTERNAL_SERVER_ERROR).json(generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, errors));
        throw new Error(e);
    }
};