
const { Jewellery } = require('../jewellery');

const {
  emailSubjects,
  defaultStatus,
  usersRoles,
} = require('../../config/Options');
const {
  apiErrorStrings,
  apiSuccessStrings,
} = require('../helpers/MessagesHelper');
const { default: mongoose } = require('mongoose');

exports.createBulk = async (body) => await  Jewellery.bulkCreate(body);

exports.getAndCountAll = async (query) => {
  const res = await  Jewellery.aggregate(query);
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
  await Jewellery.findOne(conditions, options);
exports.checkDuplicate = async (body, id) => {
  try {
    return await Jewellery.findOne({
      where: {
        title: { [Op.iLike]: `${body.title}%` },
        subCategoryId: body.subCategoryId,
        ...(id && { id: { [Op.not]: id } }),
        shopId: body.shopId,
        status: { [Op.not]: [defaultStatus.DELETED] },
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};
exports.createJewellery = async (body) => {
  try {
    const isDuplicate = await this.checkDuplicate(body);
    if (isDuplicate) {
      return {
        success: false,
        message: apiErrorStrings.Data_EXISTS('Jewellery with same title'),
      };
    }
    const jewellery = await Jewellery.create(req.body);
    return {
      success: true,
      message: apiSuccessStrings.ADDED(`Jewellery`),
      data:  jewellery,
    };
  } catch (error) {
    throw new Error(error);
  }
};
exports.updateJewellery = async (id, body) => {
  try {
    const existingData = await this.findByCondition({
      status: [defaultStatus.ACTIVE, defaultStatus.INACTIVE],
      _id: mongoose.Types.ObjectId(id),
    });
    if (!existingData) {
      return {
        success: false,
        message: apiErrorStrings.DOES_NOT_EXIST('Jewellery'),
      };
    }
    const isDuplicate = await this.checkDuplicate(body, existingData.id);
    if (isDuplicate) {
      return {
        success: false,
        message: apiErrorStrings.Data_EXISTS('Jewellery with same title'),
      };
    }
    existingData.name = body.name;
    existingData.description = body.description;
    existingData.price = body.price;
    existingData.image = body.image;
    await existingData.save();
    return {
      success: true,
      message: apiSuccessStrings.UPDATE(`Jewellery`),
      data: existingData,
    };
  } catch (error) {
    throw new Error(error);
  }
};
exports.patchStatus = async (existingData, status) => {
  if (status === defaultStatus.DELETED) {
    existingData.status = defaultStatus.DELETED;
    await existingData.save();
    return {
      message: apiSuccessStrings.DELETED('Jewellery'),
    };
  } else {
    existingData.status = status;
    await existingData.save();
  }
  return {
    message: apiSuccessStrings.STATUS_CHANGE('Jewellery'),
  };
};
