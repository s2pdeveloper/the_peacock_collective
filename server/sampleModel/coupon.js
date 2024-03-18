const mongoose = require("mongoose");
const { defaultStatus, generateCloudFrontUrl } = require('../config/Options');

const couponSchema = mongoose.Schema(
    {
        discountType: {
            type: String,
            required: true,
        },
        code: {
            type: String,
            required: true,
        },
        active: {
            type: Boolean,
            required: true,
        },
        minAmount: {
            type: Number,
            required: false,
        },
        amount: {
            type: Number,
            required: false,
        },
        discount: {
            type: Number,
            required: false,
        },
        start: {
            type: Date,
            required: true,
        },
        end: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            required: false,
            enum: defaultStatus.getAllStatusAsArray(),
            default: defaultStatus.ACTIVE,
          },
        createdBy: {
            type: String,
            required: false,
        },

        modifiedBy: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: true,
        },

    },
    {
        timestamps: true,
        collection: "Coupon",
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
    }
);
couponSchema.index({ "$**": "text" });


const Coupon = mongoose.model("Coupon", couponSchema);

exports.Coupon = Coupon; 