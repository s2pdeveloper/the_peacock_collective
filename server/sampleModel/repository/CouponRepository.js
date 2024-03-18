// const { Coupon } = require('../coupon');
const { defaultStatus } = require('../../config/Options');
const {
  apiErrorStrings,
  apiSuccessStrings,
} = require('../helpers/MessagesHelper');
const {Coupon} = require('../coupon');

exports.createBulk = async (body) => await Coupon.bulkCreate(body);

exports.getAndCountAll = async (query) => {
  const res = await Coupon.aggregate(query);
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

exports.findByCouponCondition = async (conditions, options) =>
  await Coupon.findOne(conditions, options);

exports.findAll = async (conditions, options) =>
  await Coupon.find(conditions, options);

exports.patchStatus = async (existingData, status) => {
  if (status === defaultStatus.DELETED) {
    existingData.status = defaultStatus.DELETED;
    await existingData.save();
    return {
      message: apiSuccessStrings.DELETED('Coupon'),
    };
  } else {
    existingData.status = status;
    await existingData.save();
  }
  return {
    message: apiSuccessStrings.STATUS_CHANGE('Coupon'),
  };
};
