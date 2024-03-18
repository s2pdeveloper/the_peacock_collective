 // const { Coupon } = require('../coupon');
const { defaultStatus } = require('../../config/Options');
const {
  apiErrorStrings,
  apiSuccessStrings,
} = require('../helpers/MessagesHelper');
const {Orders} = require('../orders');

exports.createBulk = async (body) => await Orders.bulkCreate(body);

exports.getAndCountAll = async (query) => {
  const res = await Orders.aggregate(query);
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

exports.findByOrdersCondition = async (conditions, options) =>
  await Orders.findOne(conditions, options);

exports.findAll = async (conditions, options) =>
  await Orders.find(conditions, options);

exports.patchStatus = async (existingData, status) => {
  if (status === defaultStatus.DELETED) {
    existingData.status = defaultStatus.DELETED;
    await existingData.save();
    return {
      message: apiSuccessStrings.DELETED('Orders'),
    };
  } else {
    existingData.status = status;
    await existingData.save();
  }
  return {
    message: apiSuccessStrings.STATUS_CHANGE('Orders'),
  };
};