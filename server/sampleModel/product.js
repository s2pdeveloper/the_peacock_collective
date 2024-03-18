const mongoose = require('mongoose');
const { defaultStatus } = require('../config/Options');

const productSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: false,
    },
    favicon: {
      type: String,
      required: false,
    },
    qty: {
      type: Number,
      required: false,
    },

    dispatchTime: {
      startDate: {
        type: Number,
        required: false,
      },
      endDate: {
        type: Number,
        required: false,
      },
    },

    sku: {
      type: String,
      required: false,
    },

    availabilty: {
      type: String,
      required: false,
    },

    published: {
      type: Boolean,
      required: false,
      default: 0,
    },
    isDelete: {
      type: Boolean,
      required: false,
      default: 0,
    },

    isFeatured: {
      type: Boolean,
      required: false,
      default: 0,
    },
    returnableDate: {
      type: String,
      required: false,
      default: 0,
    },
    // visibilityInCatalog: {
    //     type: Boolean,
    //     required: false,
    //     default: 0
    // },
    // shortDescription: {
    //     type: String,
    //     required: false,
    // },

    salePriceStarts: {
      type: Date,
      required: false,
    },
    salePriceEnds: {
      type: Date,
      required: false,
    },
    inStock: {
      type: Boolean,
      required: false,
      default: 0,
    },
    // soldIndividually: {
    //     type: Boolean,
    //     required: false,
    //     default: 0
    // },

    salePrice: {
      type: Number,
      required: false,
    },
    regularPrice: {
      type: Number,
      required: false,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Categories',
    },
    productImages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductImage',
      },
    ],
    tagId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "tag",
    },
    // displayUnit: {
    //     type: String,
    //     required: false,
    // },
    // isTrending: {
    //     type: Boolean,
    //     required: false,
    //     default: 0
    // },
    inSale: {
      type: Boolean,
      required: false,
      default: 0,
    },
    COD: {
      type: Boolean,
      required: false,
      default: 0,
    },
    // hsnCode: {
    //     type: String,
    //     required: false,
    // },
    CGSTTax: {
      type: Number,
      required: false,
    },
    SGSTTax: {
      type: Number,
      required: false,
    },
    IGSTTax: {
      type: Number,
      required: false,
    },
    createdBy: {
      type: String,
      required: false,
    },
    modifiedBy: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: false,
      enum: defaultStatus.getAllStatusAsArray(),
      default: defaultStatus.ACTIVE,
    },
  },
  {
    timestamps: true,
    collection: 'Product',
    toJSON: { getters: true, virtuals: true },
    toObject: { getters: true, virtuals: true },
  }
);
productSchema.index({ '$**': 'text' });
const Product = mongoose.model('Product', productSchema);
exports.Product = Product;
