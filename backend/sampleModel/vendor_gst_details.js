const mongoose = require("mongoose");
const { defaultStatus, generateCloudFrontUrl } = require('../config/Options');


const vendor_gst_detailsSchema = mongoose.Schema(
    {

        vendorId: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Vendor",
        },

        gstinNumber: {
            type: String,
            required: true,
        },
        panNumber: {
            type: String,
            required: true,
        },
        legalName: {
            type: String,
            required: false,
        },
        tradeName: {
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
        collection: "Vendor_gst_details",
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
    }
);
vendor_gst_detailsSchema.index({ "$**": "text" });

const Vendor_gst_details  = mongoose.model("Vendor_gst_details", vendor_gst_detailsSchema);

exports.Vendor_gst_details = Vendor_gst_details