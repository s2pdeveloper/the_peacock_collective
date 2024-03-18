const mongoose = require("mongoose");
const { defaultStatus } = require("../config/Options");


const order_shipping_mappingSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "User",
        },
        waybill: {
            type: String,
            required: false,    
        },
        remarks: {
            type: String,
            required: false,
        },
        refnum: {
            type: String,
            required: false,
        },
        vendorId: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Vendor",
        },
        orderId:
        {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Order",
        },

        vendorAddressId: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Vendor_address",
        },
        invoiceCounter: {
            type: Number,
            required: false,
        },
        invoiceKey: {
            type: String,
            required: false,
        },
        invoiceNo: {
            type: String,
            required: false,
        },
        emailVMappingId: {
            type: String,
            required: false,
        },
        statusId: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Status",
        },
        cancelReason: {
            type: String,
            required: true,
        },
        imageId: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Image",
        },

        createdBy: {
            type: String,
            required: false,
        },

        modifiedBy: {
            type: String,
            required: false,
        },
        status: {
            type: String,
            required: false,
            enum: defaultStatusus.getAllStatusAsArray(),
            default: defaultStatus.ACTIVE,
          },

    },
    {
        timestamps: true,
        collection: "Order_shipping_mapping",
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
    }
);
order_shipping_mappingSchema.index({ "$**": "text" });


const Order_shipping_mapping = mongoose.model("Order_shipping_mapping", order_shipping_mappingSchema);
exports.Order_shipping_mapping = Order_shipping_mapping;