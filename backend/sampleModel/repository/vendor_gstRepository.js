const { Vendor_gst_details} = require('../vendor_gst_details');
const { defaultStatus } = require('../../config/Options');
const {
  apiErrorStrings,
  apiSuccessStrings,
} = require('../helpers/MessagesHelper');

exports.createBulk = async (body) => await Vendor_gst_details.bulkCreate(body);

exports.getAndCountAll = async (query) => {
  const res = await Vendor_gst_details.aggregate(query);
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
  await Vendor_gst_details.findOne(conditions, options);

exports.findAll = async (conditions, options) =>
  await Vendor_gst_details.find(conditions, options);

exports.patchStatus = async (existingData, status) => {
  if (status === defaultStatus.DELETED) {
    existingData.status = defaultStatus.DELETED;
    await existingData.save();
    return {
      message: apiSuccessStrings.DELETED('Vendor_gst_details'),
    };
  } else {
    existingData.status = status;
    await existingData.save();
  }
  return {
    message: apiSuccessStrings.STATUS_CHANGE('Vendor_gst_details'),
  };
};
