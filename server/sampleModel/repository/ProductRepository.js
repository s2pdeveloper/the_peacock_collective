const { Product } = require('../product');
const { defaultStatus } = require('../../config/Options');
const {
  apiErrorStrings,
  apiSuccessStrings,
} = require('../helpers/MessagesHelper');
// const PRODUCT = require('../product');

exports.createBulk = async (body) => await Product.bulkCreate(body);

exports.getAndCountAll = async (query) => {
  const res = await Product.aggregate(query);
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

exports.findByProductCondition = async (conditions, options) =>
  await Product.findOne(conditions, options);

exports.findAll = async (conditions, options) =>
  await Product.find(conditions, options);

exports.patchStatus = async (existingData, status) => {
  if (status === defaultStatus.DELETED) {
    existingData.status = defaultStatus.DELETED;
    await existingData.save();
    return {
      message: apiSuccessStrings.DELETED('Product'),
    };
  } else {
    existingData.status = status;
    await existingData.save();
  }
  return {
    message: apiSuccessStrings.STATUS_CHANGE('Product'),
  };
};
