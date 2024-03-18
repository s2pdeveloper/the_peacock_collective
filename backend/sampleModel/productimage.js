const mongoose = require("mongoose");
const { defaultStatus, generateCloudFrontUrl } = require("../config/Options");

const productImageSchema = mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "Product",
    },
    // imageId: {
    //     type: String,
    //     required: true,
    // },
    // image:{
    //     type: String,
    //     required: false,
    //     get: (image) => {
    //       if (image) {
    //         return generateCloudFrontUrl(image);
    //       }
    //       // return null;
    //     },
    //     // set: (image) => {
    //     //   if (image) {
    //     //     return `post/${image.split('post/')[1]}`;
    //     //   }
    //     //   return null;
    //     // },
    //   } ,

    image: {
      type: String,
      required: true,
      get: (image) => {
        if (image) {
          return generateCloudFrontUrl(`product/${image}`);
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

    isBanner: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "ProductImage",
    toJSON: { getters: true, virtuals: true },
    toObject: { getters: true, virtuals: true },
  }
);
productImageSchema.index({ "$**": "text" });

const ProductImage = mongoose.model("ProductImage", productImageSchema);

module.exports = ProductImage;
