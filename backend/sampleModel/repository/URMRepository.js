const { Urm } = require('../user_role_mapping');
const { defaultStatus } = require('../../config/Options');
const  URM  = require('../user_role_mapping');

const {
  apiErrorStrings,
  apiSuccessStrings,
} = require('../helpers/MessagesHelper');

exports.createBulk = async (body) => await URM.bulkCreate(body);

exports.getAndCountAll = async (query) => {
    const res = await URM.aggregate(query);
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
  await URM.findOne(conditions, options);

exports.findAll = async (conditions, options) =>
  await URM.find(conditions, options);

exports.patchStatus = async (existingData, status) => {
  if (status === defaultStatus.DELETED) {
    existingData.status = defaultStatus.DELETED;
    await existingData.save();
    return {
      message: apiSuccessStrings.DELETED('user_role_mapping'),
    };
  } else {
    existingData.status = status;
    await existingData.save();
  }
  return {
    message: apiSuccessStrings.STATUS_CHANGE('user_role_mapping'),
  };
};
