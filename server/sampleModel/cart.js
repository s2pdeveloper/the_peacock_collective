const mongoose = require("mongoose");
const { defaultStatus } = require("../config/Options");


const cartSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
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
        collection: "Cart",
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
    }
);
cartSchema.index({ "$**": "text" });


const Cart = mongoose.model("Cart", cartSchema);

exports.Cart = Cart; 