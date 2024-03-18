const mongoose = require("mongoose");
const { defaultStatus, generateCloudFrontUrl } = require('../config/Options');


const addressSchema = mongoose.Schema(
    {
        isDelete: {
            type: Boolean,
            required: false,
            default: 0
        },
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        pincode: {
            type: Number,
            required: true,
        },
        addressLine1: {
            type: String,
            required: true,
        },
        addressLine2: {
            type: String,
            required: false,
        },
        addressLine3: {
            type: String,
            required: false,
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
        collection: "Address",
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
    }
);
addressSchema.index({ "$**": "text" });

const Address = mongoose.model("Address", addressSchema);

exports.Address = Address;