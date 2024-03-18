const mongoose = require("mongoose");
const { defaultStatus, generateCloudFrontUrl } = require('../config/Options');


const vendorSchema = mongoose.Schema(
    {
        vendorCounter: {
            type: Number,
            required: false,
        },
        isDelete: {
            type: Boolean,
            required: false,
            default: 0
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        alternatePhone: {
            type: String,
            required: false,
        },
        companyName: {
            type: String,
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
    },
    {
        timestamps: true,
        collection: "Vendor",
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
    }
);
vendorSchema.index({ "$**": "text" });


const Vendor = mongoose.model("Vendor", vendorSchema);

exports.Vendor = Vendor;