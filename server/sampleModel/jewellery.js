const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtOptions = require('../config/JwtOptions');
const OPTIONS = require('../config/Options');
// const { usersRoles, defaultStatus } = OPTIONS;
const { defaultStatus, generateCloudFrontUrl,usersRoles } = require('../config/Options');
const JewellerySchema = mongoose.Schema(
  {
    isDelete: {
      type: Boolean,
      required: false,
      default: 0,
    },
   name: {
      type: String,
      required: true,
      unique: true,
    },
  

    status: {
      type: String,
      required: false,
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
    // modifiedBy: {
    //   type: Date,
    //   required: false,
    // },

    image:[{
      type: String,
      required: false,
      get: (image) => {
        if (image) {
          return generateCloudFrontUrl(image);
        }
        // return null;
      },
      // set: (image) => {
      //   if (image) {
      //     return `post/${image.split('post/')[1]}`;
      //   }
      //   return null;
      // },
    } ],






  },
  {
    collection: 'Jewellery',
    timestamps: true,
    // toJSON: { getters: true, virtuals: true },
    // toObject: { getters: true, virtuals: true },
  }
);
JewellerySchema.index({ '$**': 'text' });



const Jewellery = mongoose.model('Jewellery', JewellerySchema);

// exports.User = Jewellery;

module.exports = Jewellery;