const mongoose = require('mongoose');
const { defaultStatus, generateCloudFrontUrl } = require('../config/Options');

const tagSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
      get: (image) => {
        if (image) {
          return generateCloudFrontUrl(`tag/${image}`);
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
    collection: 'Tag',
    toJSON: { getters: true, virtuals: true },
    toObject: { getters: true, virtuals: true },
  }
);
tagSchema.index({ '$**': 'text' });

const Tag = mongoose.model('Tag', tagSchema);

exports.Tag = Tag;
