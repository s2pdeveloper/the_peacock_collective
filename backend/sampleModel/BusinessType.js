const mongoose = require('mongoose');
const { defaultStatus, generateCloudFrontUrl } = require('../config/Options');

const BusinessTypeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
      get: (image) => {
        if (image && image.length > 0) {
          return generateCloudFrontUrl(image);
        }
        return null;
      },
      set: (image) => {
        if (image) {
          return `post/${image.split('post/')[1]}`;
        }
        return null;
      },
    },
    status: {
      type: String,
      required: false,
      enum: defaultStatus.getAllStatusAsArray(),
      default: defaultStatus.ACTIVE,
    },
  },
  {
    collection: 'BusinessType',
    timestamps: true,
    toJSON: { getters: true, virtuals: true },
    toObject: { getters: true, virtuals: true },
  }
);
BusinessTypeSchema.index({ '$**': 'text' });

const BusinessType = mongoose.model('BusinessType', BusinessTypeSchema);

exports.BusinessType = BusinessType;
