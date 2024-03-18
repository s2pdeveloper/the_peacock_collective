const { BusinessType } = require('../BusinessType');
const {
  emailSubjects,
  defaultStatus,
  usersRoles,
} = require('../../config/Options');
const {
  apiErrorStrings,
  apiSuccessStrings,
} = require('../helpers/MessagesHelper');

exports.createBulk = async (body) => await BusinessType.bulkCreate(body);

exports.getAndCountAll = async (query) => {
  const res = await BusinessType.aggregate(query);
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
  await BusinessType.findOne(conditions, options);

exports.findAll = async (conditions, options) =>
  await BusinessType.find(conditions, options);

exports.patchStatus = async (existingData, status) => {
  if (status === defaultStatus.DELETED) {
    existingData.status = defaultStatus.DELETED;
    await existingData.save();
    return {
      message: apiSuccessStrings.DELETED('BusinessType'),
    };
  } else {
    existingData.status = status;
    await existingData.save();
  }
  return {
    message: apiSuccessStrings.STATUS_CHANGE('BusinessType'),
  };
};
