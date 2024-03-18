const mongoose = require("mongoose");
const { defaultStatus, generateCloudFrontUrl } = require('../config/Options');


const taxSchema = mongoose.Schema(
    {

        CGSTTax: {
            type: String,
            required: true,
        },
        SGSTTax: {
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
        collection: 'Tax',
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
      }
);
taxSchema.index({ "$**": "text" });


const Tax = mongoose.model("Tax", taxSchema);

exports.Tax = Tax;

 
