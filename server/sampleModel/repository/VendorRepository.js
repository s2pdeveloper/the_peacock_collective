const { Vendor } = require('../vendor');
const { defaultStatus } = require('../../config/Options');
const {
  apiErrorStrings,
  apiSuccessStrings,
} = require('../helpers/MessagesHelper');
// const VENDOR = require('../vendor');

exports.createBulk = async (body) => await Product.bulkCreate(body);

exports.getAndCountAll = async (query) => {
  const res = await Vendor.aggregate(query);
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

exports.findByVendorCondition = async (conditions, options) =>
  await Vendor.findOne(conditions, options);

exports.findAll = async (conditions, options) =>
  await Vendor.find(conditions, options);

exports.patchStatus = async (existingData, status) => {
  if (status === defaultStatus.DELETED) {
    existingData.status = defaultStatus.DELETED;
    await existingData.save();
    return {
      message: apiSuccessStrings.DELETED('Vendor'),
    };
  } else {
    existingData.status = status;
    await existingData.save();
  }
  return {
    message: apiSuccessStrings.STATUS_CHANGE('Vendor'),
  };
};
