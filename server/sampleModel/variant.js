const mongoose = require("mongoose");
const { defaultStatus } = require("../config/Options");


const variantSchema = mongoose.Schema(
    {

        attributeId: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Attribute",
        },
        optionId: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Productoption",
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
        collection: "Variant",
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
    }
);
variantSchema.index({ "$**": "text" });


const Variant = mongoose.model("Variant", variantSchema);

exports.Variant = Variant;