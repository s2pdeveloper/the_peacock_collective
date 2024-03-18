const mongoose = require("mongoose");
const { defaultStatus } = require("../config/Options");


const cartoptionSchema = mongoose.Schema(
    {
        cartId: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Cart",
        },
        statusId: {
            type: Number,
            required: true
        },
        isDelete: {
            type: Boolean,
            required: false,
            default: 0
        },
        productOptionId: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Productoption",
        },
        quantity: {
            type: Number,
            required: true
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
        collection: "Cartoption",
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
    }
);
cartoptionSchema.index({ "$**": "text" });


const Cartoption = mongoose.model("Cartoption", cartoptionSchema);

exports.Cartoption = Cartoption; 