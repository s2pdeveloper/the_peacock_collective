const mongoose = require("mongoose");
const { defaultStatus, generateCloudFrontUrl } = require('../config/Options');


const vendor_addressSchema = mongoose.Schema(
    {
        vendorId: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Vendor",
        },
        isDelete: {
            type: Boolean,
            required: false,
            default: 0
        },
        addressId: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Address",
        },
        isWareHouse: {
            type: Boolean,
            required: false,
            default: 0
        },
        isDefault: {
            type: Boolean,
            required: false,
            default: 0
        },
        status: {
            type: String,
            required: false,
            enum: defaultStatus.getAllStatusAsArray(),
            default: defaultStatus.ACTIVE,
        },
    },
    
    {
        timestamps: true,
        collection: "Vendor_address",
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
    }
);
vendor_addressSchema.index({ "$**": "text" });

const Vendor_address = mongoose.model("Vendor_address", vendor_addressSchema);

exports.Vendor_address = Vendor_address;