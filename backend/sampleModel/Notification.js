const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    isRead: {
      type: Boolean,
      required: false,
    },
    receiverId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: false,
    },
    senderId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    isSystemGenerated: {
      type: Boolean,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
  },
  {
    collection: 'Notifications',
    timestamps: false,
    toJSON: { getters: true, virtuals: true },
    toObject: { getters: true, virtuals: true },
  }
);
NotificationsSchema.index({ '$**': 'text' });

const Notifications = mongoose.model('Notifications', NotificationsSchema);

exports.Notifications = Notifications;
