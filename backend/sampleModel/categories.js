const mongoose = require('mongoose');
const { defaultStatus, generateCloudFrontUrl } = require('../config/Options');

const categoriesSchema = mongoose.Schema(
  {
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Categories',
      required: false,
      default: null,
      set: (v) => {
        return v == '' ? null : v;
      },
    },
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
      get: (image) => {
        if (image) {
          return generateCloudFrontUrl(`category/${image}` );
        }
        // return null;
      },
      // set: (image) => {
      //   if (image) {
      //     return `post/${image.split('post/')[1]}`;
      //   }
      //   return null;
      // },
    },
    isDelete: {
      type: Boolean,
      required: false,
      default: 0,
    },
    status: {
      type: String,
      required: true,
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
    collection: 'Categories',
    toJSON: { getters: true, virtuals: true },
    toObject: { getters: true, virtuals: true },
  }
);
categoriesSchema.index({ '$**': 'text' });

const Categories = mongoose.model('Categories', categoriesSchema);

exports.Categories = Categories;
