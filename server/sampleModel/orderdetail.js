const mongoose = require("mongoose");
const { defaultStatus } = require("../config/Options");


const orderdetailSchema = mongoose.Schema(
    {

        orderId: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Order",
        },
        productOptionId: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Productoption",
        },
        price: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        CGSTTax: {
            type: Number,
            required: true
        },
        SGSTTax: {
            type: Number,
            required: true
        },
        IGSTTax: {
            type: Number,
            required: true
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
        collection: "Orderdetail",
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
    }
);
orderdetailSchema.index({ "$**": "text" });


const Orderdetail = mongoose.model("Orderdetail", orderdetailSchema);

exports.Orderdetail = Orderdetail;