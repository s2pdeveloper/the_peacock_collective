const mongoose = require('mongoose');
const { defaultStatus, generateCloudFrontUrl } = require('../config/Options');
const Schema = mongoose.Schema;

const SeasonalOfferSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
    },
    media:
      [{
        type: Schema.Types.ObjectId,
        ref: 'SeasonalOfferMedia',
        required: true,
      }],
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
    collection: 'SeasonalOffer',
    timestamps: true,
    toJSON: { getters: true, virtuals: true },
    toObject: { getters: true, virtuals: true },
  }
);
SeasonalOfferSchema.index({ '$**': 'text' });

const SeasonalOffer = mongoose.model('SeasonalOffer', SeasonalOfferSchema);

exports.SeasonalOffer = SeasonalOffer;
