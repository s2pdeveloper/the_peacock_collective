const { Catalogue } = require('../Catalogue');
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

exports.createBulk = async (body) => await Catalogue.bulkCreate(body);

exports.getAndCountAll = async (query) => {
  const res = await Catalogue.aggregate(query);
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
  await Catalogue.findOne(conditions, options);
exports.checkDuplicate = async (body, id) => {
  try {
    return await Category.findOne({
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
exports.createCatalogue = async (body) => {
  try {
    const isDuplicate = await this.checkDuplicate(body);
    if (isDuplicate) {
      return {
        success: false,
        message: apiErrorStrings.Data_EXISTS('Catalogue with same title'),
      };
    }
    const catalogue = await Catalogue.create(req.body);
    return {
      success: true,
      message: apiSuccessStrings.ADDED(`Category`),
      data: catalogue,
    };
  } catch (error) {
    throw new Error(error);
  }
};
exports.updateCatalogue = async (id, body) => {
  try {
    const existingData = await this.findByCondition({
      status: [defaultStatus.ACTIVE, defaultStatus.INACTIVE],
      _id: mongoose.Types.ObjectId(id),
    });
    if (!existingData) {
      return {
        success: false,
        message: apiErrorStrings.DOES_NOT_EXIST('Catalogue'),
      };
    }
    const isDuplicate = await this.checkDuplicate(body, existingData.id);
    if (isDuplicate) {
      return {
        success: false,
        message: apiErrorStrings.Data_EXISTS('Catalogue with same title'),
      };
    }
    existingData.title = body.title;
    existingData.description = body.description;
    existingData.price = body.price;
    existingData.image = body.image;
    await existingData.save();
    return {
      success: true,
      message: apiSuccessStrings.UPDATE(`Catalogue`),
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
      message: apiSuccessStrings.DELETED('Catalogue'),
    };
  } else {
    existingData.status = status;
    await existingData.save();
  }
  return {
    message: apiSuccessStrings.STATUS_CHANGE('Catalogue'),
  };
};
