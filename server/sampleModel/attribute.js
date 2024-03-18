const mongoose = require("mongoose");
const { defaultStatus, generateCloudFrontUrl } = require('../config/Options');


const attributeSchema = mongoose.Schema(
    {
        isDelete: {
            type: Boolean,
            required: false,
            default: 0
        },
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Product",
        },
        name: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
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
        collection: "Attribute",
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
    }
);
attributeSchema.index({ "$**": "text" });


const Attribute = mongoose.model("Attribute", attributeSchema);

exports.Attribute = Attribute;