const { Tag } = require('../tag');
const { defaultStatus } = require('../../config/Options');
const {
  apiErrorStrings,
  apiSuccessStrings,
} = require('../helpers/MessagesHelper');
// const tag = require('../tag');

exports.createBulk = async (body) => await Tag.bulkCreate(body);

exports.getAndCountAll = async (query) => {
  const res = await Tag.aggregate(query);
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

exports.findByTagCondition = async (conditions, options) =>
  await Tag.findOne(conditions, options);

exports.findAll = async (conditions, options) =>
  await Tag.find(conditions, options);

exports.patchStatus = async (existingData, status) => {
  if (status === defaultStatus.DELETED) {
    existingData.status = defaultStatus.DELETED;
    await existingData.save();
    return {
      message: apiSuccessStrings.DELETED('Tag'),
    };
  } else {
    existingData.status = status;
    await existingData.save();
  }
  return {
    message: apiSuccessStrings.STATUS_CHANGE('Tag'),
  };
};
