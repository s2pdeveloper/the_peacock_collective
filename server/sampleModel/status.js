const mongoose = require("mongoose");
const { defaultStatus } = require("../config/Options");


const statusSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        value: {
            type: Number,
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
        collection: "Status",
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
    }
);
statusSchema.index({ "$**": "text" });


const Status = mongoose.model("Status", statusSchema);

exports.Status = Status;