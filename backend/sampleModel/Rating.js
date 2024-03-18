const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var RatingSchema = mongoose.Schema(
  {
    shopId: {
      type: Schema.Types.ObjectId,
      ref: 'shop_user',
      required: false,
    },
    customerId: {
      type: Schema.Types.ObjectId,
      ref: 'customer',
      required: false,
    },
    orderId: {
      type: Schema.Types.ObjectId,
      ref: 'order',
      required: false,
    },
    quality: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: false,
    },
  },
  {
    collection: 'Rating',
    timestamps: false,
    toJSON: { getters: true, virtuals: true },
    toObject: { getters: true, virtuals: true },
  }
);
RatingSchema.index({ '$**': 'text' });

const Rating = mongoose.model('Rating', RatingSchema);

exports.Rating = Rating;
