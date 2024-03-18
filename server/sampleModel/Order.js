const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { orderStatus } = require('../config/Options');

const OrderSchema = mongoose.Schema(
  {
    shopId: {
      type: Schema.Types.ObjectId,
      ref: 'ShopDetails',
      required: false,
    },
    customerId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },
    orderNumber: {
      type: String,
      required: true,
    },
    lastMessageId: {
      type: Schema.Types.ObjectId,
      ref: 'ChatMessage',
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: false,
      enum: orderStatus.getAllOrderStatusAsArray(),
      default: orderStatus.NEW,
    },
    secondaryStatus: {
      type: String,
      required: false,
    },
  },
  {
    collection: 'Order',
    timestamps: true,
    toJSON: { getters: true, virtuals: true },
    toObject: { getters: true, virtuals: true },
  }
);

const Order = mongoose.model('Order', OrderSchema);

exports.Order = Order;
