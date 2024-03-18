const { Address } = require('../address');
const { defaultStatus } = require('../../config/Options');
const {
  apiErrorStrings,
  apiSuccessStrings,
} = require('../helpers/MessagesHelper');
// const Address = require('../address');

exports.createBulk = async (body) => await Address.bulkCreate(body);

exports.getAndCountAll = async (query) => {
  const res = await Address.aggregate(query);
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

exports.findByAddressCondition = async (conditions, options) =>
  await Address.findOne(conditions, options);

exports.findAll = async (conditions, options) =>
  await Address.find(conditions, options);

exports.patchStatus = async (existingData, status) => {
  if (status === defaultStatus.DELETED) {
    existingData.status = defaultStatus.DELETED;
    await existingData.save();
    return {
      message: apiSuccessStrings.DELETED('Address'),
    };
  } else {
    existingData.status = status;
    await existingData.save();
  }
  return {
    message: apiSuccessStrings.STATUS_CHANGE('Address'),
  };
};
