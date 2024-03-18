const mongoose = require('mongoose');
const { defaultStatus, generateCloudFrontUrl } = require('../config/Options');

const AdvertiseSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: true,
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
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
  },
  {
    collection: 'Advertise',
    timestamps: true,
    toJSON: { getters: true, virtuals: true },
    toObject: { getters: true, virtuals: true },
  }
);
AdvertiseSchema.index({ '$**': 'text' });

const Advertise = mongoose.model('Advertise', AdvertiseSchema);

exports.Advertise = Advertise;
