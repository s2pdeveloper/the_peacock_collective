const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { defaultStatus, generateCloudFrontUrl } = require('../config/Options');

const ChatMessageSchema = mongoose.Schema(
  {
    message: {
      type: String,
      required: false,
    },
    orderId: {
      type: Schema.Types.ObjectId,
      ref: 'Order',
      required: false,
    },
    senderId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    image: {
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
    status: {
      type: String,
      required: false,
      enum: defaultStatus.getAllStatusAsArray(),
      default: defaultStatus.ACTIVE,
    },
  },
  {
    collection: 'ChatMessage',
    timestamps: true,
    toJSON: { getters: true, virtuals: true },
    toObject: { getters: true, virtuals: true },
  }
);
const ChatMessage = mongoose.model('ChatMessage', ChatMessageSchema);

exports.ChatMessage = ChatMessage;
