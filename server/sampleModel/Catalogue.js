const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { defaultStatus, generateCloudFrontUrl } = require('../config/Options');

const CatalogueSchema = mongoose.Schema(
  {
    shopId: {
      type: Schema.Types.ObjectId,
      ref: 'Shop',
      required: false,
    },
    subCategoryId: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: false,
    },
    image: [
      {
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
    ],
    status: {
      type: String,
      required: false,
      enum: defaultStatus.getAllStatusAsArray(),
      default: defaultStatus.ACTIVE,
    },
  },
  {
    collection: 'Catalogue',
    timestamps: true,
    toJSON: { getters: true, virtuals: true },
    toObject: { getters: true, virtuals: true },
  }
);
CatalogueSchema.index({ '$**': 'text' });

const Catalogue = mongoose.model('Catalogue', CatalogueSchema);

exports.Catalogue = Catalogue;
