const { Role } = require('../role');
const { defaultStatus } = require('../../config/Options');
const {
  apiErrorStrings,
  apiSuccessStrings,
} = require('../helpers/MessagesHelper');
const ROLE = require('../role');

exports.createBulk = async (body) => await Category.bulkCreate(body);

exports.getAndCountAll = async (query) => {
  const res = await ROLE.aggregate(query);
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
  await ROLE.findOne(conditions, options);

exports.findAll = async (conditions, options) =>
  await ROLE.find(conditions, options);

exports.patchStatus = async (existingData, status) => {
  if (status === defaultStatus.DELETED) {
    existingData.status = defaultStatus.DELETED;
    await existingData.save();
    return {
      message: apiSuccessStrings.DELETED('Role'),
    };
  } else {
    existingData.status = status;
    await existingData.save();
  }
  return {
    message: apiSuccessStrings.STATUS_CHANGE('Role'),
  };
};
