const { default: mongoose } = require('mongoose');
const { ChatMessage } = require('../ChatMessage');
const { customErrorLogger } = require('../helpers/ErrorHandleHelper');
const { apiSuccessStrings } = require('../helpers/MessagesHelper');
const OrderRepository = require('./OrderRepository');

exports.getAndCountAll = async (query) => {
  const res = await ChatMessage.aggregate(query);
  return {
    data: res[0].data,
    // eslint-disable-next-line no-nested-ternary
    count: res[0].metadata
      ? res[0].metadata.length
        ? res[0].metadata[0].total
        : 0
      : 0,
  };
};

exports.sendMessage = async (payload) => {
  try {
    let order = await OrderRepository.findOne({
      _id: mongoose.Types.ObjectId(payload.orderId),
    });
    const chatMessage = await ChatMessage.create(payload);
    order.lastMessageId = chatMessage._id;
    await order.save();
    return {
      data: { chatMessage, order },
      message: apiSuccessStrings.REQUEST_SENT_MESSAGE('Message'),
    };
  } catch (error) {
    customErrorLogger(error);
  }
};
