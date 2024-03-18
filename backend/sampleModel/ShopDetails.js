const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { generateCloudFrontUrl } = require('../config/Options');

// Setup schema
const ShopDetailsSchema = mongoose.Schema(
  {
    businessTypeId: {
      type: Schema.Types.ObjectId,
      ref: 'BusinessType',
      required: false,
    },
    subCategoryId: [
      {
        type: Schema.Types.ObjectId,
        ref: 'subCategory',
        required: false,
      },
    ],
    shopName: {
      type: String,
      required: false,
    },
    keyword: {
      type: String,
      required: false,
    },
    UPI: {
      type: String,
      required: false,
      default: '',
    },
    alternateMobile: {
      type: String,
      required: false,
    },
    aboutUs: {
      type: String,
      required: false,
    },
    galleryImages: [
      {
        type: String,
        required: false,
        get: (galleryImages) => {
          if (galleryImages && galleryImages.length > 0) {
            return generateCloudFrontUrl(galleryImages);
          }
          return null;
        },
        set: (galleryImages) => {
          if (galleryImages) {
            return `post/${galleryImages.split('post/')[1]}`;
          }
          return null;
        },
      },
    ],
    address: {
      line1: {
        type: String,
        required: false,
        default: null,
      },
      line2: {
        type: String,
        required: false,
        default: null,
      },
      city: {
        type: String,
        required: false,
      },
      state: {
        type: String,
        required: false,
        default: null,
      },
      country: {
        type: String,
        required: false,
        default: null,
      },
      pinCode: {
        type: String,
        required: false,
        default: null,
      },
    },
    bannerImages: {
      type: String,
      required: false,
      get: (bannerImages) => {
        if (bannerImages && bannerImages.length > 0) {
          return generateCloudFrontUrl(bannerImages);
        }
        return null;
      },
      set: (bannerImages) => {
        if (bannerImages) {
          return `post/${bannerImages.split('post/')[1]}`;
        }
        return null;
      },
    },
    gMap: {
      lat: {
        type: Number,
        required: false,
      },
      lng: {
        type: Number,
        required: false,
      },
    },
    mPin: {
      type: Number,
      required: false,
    },
    links: {
      facebook: {
        type: String,
        required: false,
      },
      instagram: {
        type: String,
        required: false,
      },
      youtube: {
        type: String,
        required: false,
      },
      website: {
        type: String,
        required: false,
      },
    },
    gstNumber: {
      type: String,
      required: false,
    },
    schedule: {
      day: {
        type: String,
        required: false,
      },
      open: {
        type: String,
        required: false,
      },
      close: {
        type: String,
        required: false,
      },
      startTime: {
        type: String,
        required: false,
      },
      endTime: {
        type: String,
        required: false,
      },
    },
    gallery: {
      type: String,
      required: false,
    },
    yearOfEstablished: {
      type: Date,
      required: false,
    },
    avgRating: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  {
    collection: 'ShopDetails',
    timestamps: true,
    toJSON: { getters: true, virtuals: true },
    toObject: { getters: true, virtuals: true },
  }
);
ShopDetailsSchema.index({ '$**': 'text' });

const ShopDetails = mongoose.model('ShopDetails', ShopDetailsSchema);

exports.ShopDetails = ShopDetails;
