const mongoose = require("mongoose");


const variantimageSchema = mongoose.Schema(
    {

        optionId: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Product",
        },
        imageId: {
            type: String,
            required: true,
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
        collection: "Variantimage",
    }
);
variantimageSchema.index({ "$**": "text" });


const Variantimage = mongoose.model("Variantimage", variantimageSchema)

module.exports = Variantimage;