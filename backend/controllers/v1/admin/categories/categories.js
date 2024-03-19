const sequelize = require('sequelize');
const { Categories } = require('../../../../models');
const fs = require('fs');
const {
  OPTIONS,
  generateResponse,
  generateCreateData,
} = require('../../../../config/options/global.options');
const MESSAGES = require('../../../../config/options/messages.options');
const resCode = MESSAGES.resCode;
const Op = sequelize.Op;
const Model = Categories;
const ApiError = require('../../../../config/middlewares/api.error');
const { asyncHandler } = require('../../../../config/middlewares/async.handler');

const modelObj = {
  create: asyncHandler(async (req, res) => {

    for (let key in req.body) {
      if (req.body[key] === 'null') {
        req.body[key] = null;
      }
    }
    let checkExisting = await Model.findOne({
      where: {
        name: req.body.name,
        ...(req.body.parentId && { parentId: req.body.parentId }),
      },
    });
    console.log("req.body", req.body);
    if (checkExisting) {
      if (
        ![undefined, null, ''].includes(req.file) &&
        fs.existsSync(req.file.path)
      ) {
        fs.unlinkSync(req.file.path);
      }
      let message = MESSAGES.apiErrorStrings.Data_EXISTS('Categories');
      throw new ApiError(message, resCode.HTTP_BAD_REQUEST);

    }

    let createObj = await generateCreateData(new Model(), req.body);
    if (![undefined, null, ''].includes(req.file)) {
      createObj.image = req.file.filename;
    }
    await createObj.save();
    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.ADDED('Categories'),
      })
    );
  }),
  getAll: asyncHandler(async (req, res) => {
    const {
      page = 1,
      pageSize = 10,
      column = 'createdAt',
      direction = 'DESC',
      search = null,
      catagory = false
    } = req.query;
    let offset = (page - 1) * pageSize || 0;
    let query = {
      where: {
        ...(![undefined, null, ''].includes(search) && {
          [Op.or]: {
            name: { [Op.like]: search },
            description: { [Op.like]: search },
          },
        }),
        ...(catagory && {
          parentId: {
            [Op.ne]: null
          }
        })

      },
      order: [[column, direction]],
      // attributes: {
      //   exclude: ['userId'],
      // },
      // include: {
      //   model: User,
      //   as: 'shop',
      //   attributes: ['id', 'name', 'mobile'],
      // },
      offset: +offset,
      limit: +pageSize,
    };
    let response = await Model.findAndCountAll(query);

    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, response));

  }),
  getById: asyncHandler(async (req, res) => {
    let existing = await Model.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!existing) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Categories');
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST)
    }
    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, existing));

  }),
  update: asyncHandler(async (req, res) => {

    for (let key in req.body) {
      if (req.body[key] === 'null') {
        req.body[key] = null;
      }
    }
    let itemDetails = await Model.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!itemDetails) {
      if (
        ![undefined, null, ''].includes(req.file) &&
        fs.existsSync(req.file.path)
      ) {
        fs.unlinkSync(req.file.path);
      }
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Categories');
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST)

    } else {
      itemDetails = await generateCreateData(itemDetails, req.body);
      if (![undefined, null, ''].includes(req.file)) {
        if (itemDetails.image) {
          let path = `assets/${itemDetails.image.split('image/')[1]}`;
          if (fs.existsSync(path)) {
            fs.unlinkSync(path);
          }
        }
        itemDetails.image = req.file.filename;
      }
      await itemDetails.save();
      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.UPDATE('Categories'),
        })
      );
    }

  }),
  delete: asyncHandler(async (req, res) => {
    let query = {
      where: {
        id: req.params.id,
      },
    };
    let item = await Model.findOne(query);
    let imagePath =
      item && item.image && item.image != 'undefined' ? item.image : null;
    let deletedItem = await Model.destroy(query);
    if (deletedItem) {
      let path = `assets/${imagePath.split('image/')[1]}`;
      if (fs.existsSync(path)) {
        fs.unlinkSync(path);
      }
      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.DELETED('Categories'),
        })
      );
    } else {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Categories');
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST)

    }

  }),
};

module.exports = modelObj;
