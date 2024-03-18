const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoriteSchema = mongoose.Schema(
  {
    shopId: {
      type: Schema.Types.ObjectId,
      ref: 'Shop',
      required: false,
    },
    customerId: {
      type: Schema.Types.ObjectId,
      ref: 'customer',
      required: false,
    },
  },
  {
    collection: 'Favorite',
    timestamps: true,
    toJSON: { getters: true, virtuals: true },
    toObject: { getters: true, virtuals: true },
  }
);

const Favorite = mongoose.model('Favorite', FavoriteSchema);

exports.Favorite = Favorite;
