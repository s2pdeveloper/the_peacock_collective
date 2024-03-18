// const { PVM } = require('../product_vendor_mapping');
const { defaultStatus } = require('../../config/Options');
const  ProductVM  = require('../product_vendor_mapping');

const {
  apiErrorStrings,
  apiSuccessStrings,
} = require('../helpers/MessagesHelper');

exports.createBulk = async (body) => await ProductVM.bulkCreate(body);

exports.getAndCountAll = async (query) => {
    const res = await ProductVM.aggregate(query);
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

exports.findByCondition = async (conditions, options) =>
  await ProductVM.findOne(conditions, options);

exports.findAll = async (conditions, options) =>
  await ProductVM.find(conditions, options);

exports.patchStatus = async (existingData, status) => {
  if (status === defaultStatus.DELETED) {
    existingData.status = defaultStatus.DELETED;
    await existingData.save();
    return {
      message: apiSuccessStrings.DELETED('product_vendor_mapping'),
    };
  } else {
    existingData.status = status;
    await existingData.save();
  }
  return {
    message: apiSuccessStrings.STATUS_CHANGE('product_vendor_mapping'),
  };
};
