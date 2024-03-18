const mongoose = require("mongoose");


const user_addressSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "User",
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
        isDefault: {
            type: Boolean,
            required: false,
            default: 0
        },
    },
    {
        timestamps: true,
        collection: "User_address",
    }
);
user_addressSchema.index({ "$**": "text" });


const User_address = mongoose.model("User_address", user_addressSchema);

module.exports = User_address;