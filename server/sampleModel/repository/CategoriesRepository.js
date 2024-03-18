const { Categories } = require('../categories');
const { defaultStatus } = require('../../config/Options');
const {
  apiErrorStrings,
  apiSuccessStrings,
} = require('../helpers/MessagesHelper');
// const Categories = require('../categories');

exports.createBulk = async (body) => await Categories.bulkCreate(body);

exports.getAndCountAll = async (query) => {
  const res = await Categories.aggregate(query);
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

exports.findByCategoriesCondition = async (conditions, options) =>
  await Categories.findOne(conditions, options);

exports.findAll = async (conditions, options) =>
  await Categories.find(conditions, options);

exports.patchStatus = async (existingData, status) => {
  if (status === defaultStatus.DELETED) {
    existingData.status = defaultStatus.DELETED;
    await existingData.save();
    return {
      message: apiSuccessStrings.DELETED('Categories'),
    };
  } else {
    existingData.status = status;
    await existingData.save();
  }
  return {
    message: apiSuccessStrings.STATUS_CHANGE('Categories'),
  };
};
