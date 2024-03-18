const { Variant } = require('../variant');
const { defaultStatus } = require('../../config/Options');
const {
  apiErrorStrings,
  apiSuccessStrings,
} = require('../helpers/MessagesHelper');
// const  Variant  = require('../variant');

exports.createBulk = async (body) => await Variant.bulkCreate(body);

exports.getAndCountAll = async (query) => {
  const res = await Variant.aggregate(query);
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

exports.findByVariantCondition = async (conditions, options) =>
  await Variant.findOne(conditions, options);

exports.findAll = async (conditions, options) =>
  await Variant.find(conditions, options);

exports.patchStatus = async (existingData, status) => {
  if (status === defaultStatus.DELETED) {
    existingData.status = defaultStatus.DELETED;
    await existingData.save();
    return {
      message: apiSuccessStrings.DELETED('Variant'),
    };
  } else {
    existingData.status = status;
    await existingData.save();
  }
  return {
    message: apiSuccessStrings.STATUS_CHANGE('Variant'),
  };
};
