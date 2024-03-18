const mongoose = require("mongoose");
const { defaultStatus } = require("../config/Options");


const orderSchema = mongoose.Schema(
     {
        orderCounter:{
            type:Number,
            required:true,
        },
        orderKey:{
            type:String,
            required:false,
        },
        orderNo:{
            type:String,
            required:false,
        },
        userId :{
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "User",
            },
        amount :{
            type:Number,
            required:true,
        },
        totalAmount :{
            type:Number,
            required:true,
        },
        phone :{
                type:String,
                required:true,
            },
        addressId :{
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Address",
            },
        CGSTTax :{
            type:Number,
            required:false,
        },
        SGSTTax: {
            type:Number,
            required:false,
        },
        email :{
                type:String,
                required:true,
            },
        date :{
            type:Date,
            required:true,
        },
         createdBy :{
                type:String,
                required:false,
            },
         modifiedBy :{
                type:String,
                required:false,
            },
        statusId :{
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Status",
            },
        paymentMode :{
            type:String,
            required:false,
        },
        couponId :{
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Coupon",
        },
        couponAmount :{
            type:Number,
            required:false,
        },
        cartId :{
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Cart",
        },
        emailCMappingId :{
            type:String,
            required:false,
        },
        paymentDetailsId :{
            type:String,
            required:false,
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
        collection: "Orders",
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
    }
);
orderSchema.index({ "$**": "text" });


const Orders = mongoose.model("Orders", orderSchema);

exports.Orders = Orders;