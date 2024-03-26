const sequelize = require("sequelize");
const { Images } = require("../../../../models");
const fs = require("fs");
const {
  OPTIONS,
  generateResponse,
  generateCreateData,
} = require("../../../../config/options/global.options");
const MESSAGES = require("../../../../config/options/messages.options");
const resCode = MESSAGES.resCode;
const Op = sequelize.Op;
const Model = Images;
const ApiError = require("../../../../config/middlewares/api.error");
const {
  asyncHandler,
} = require("../../../../config/middlewares/async.handler");
const cloudinary = require("../../../../shared/service/cloudinary.service");

const modelObj = {
  create: asyncHandler(async (req, res) => {
    // let checkExisting = await Model.findOne({
    //   where: {
    //     companyName: req.body.companyName,
    //   },
    // });
    // if (checkExisting) {
    //   let message = MESSAGES.apiErrorStrings.Data_EXISTS("Image");
    //   throw new ApiError(message, resCode.HTTP_BAD_REQUEST);
    //   return;
    // }
    // console.log("your file in req.", req.file);
    // console.log("your file in buffer", req.file.buffer);
    if (req.file) {
      req.body.image = await cloudinary.uploadFromBuffer(req.file.buffer);
      console.log(req.body);
    } else {
      return;
    }

    let createObj = await generateCreateData(new Model(), req.body);
    await createObj.save();
    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.ADDED("Image"),
      })
    );
  }),

  getAll: asyncHandler(async (req, res) => {
    console.log("your model", Model);
    const {
      page = 1,
      pageSize = 10,
      column = "createdAt",
      direction = "DESC",
      search = null,
    } = req.query;
    let offset = (page - 1) * pageSize || 0;
    let query = {
      where: {
        ...(search && {
          [Op.or]: {
            name: { [Op.like]: search },
          },
        }),
      },
      order: [[column, direction]],
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
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("ProductImage");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, existing));
  }),

  getByProductId: asyncHandler(async (req, res) => {
    let existing = await Model.findAll({
      where: {
        productId: req.params.id,
      },
    });

    // if (!existing) {
    //   let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("ProductImage");
    //   throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    // }
    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, existing));
  }),

  update: asyncHandler(async (req, res) => {
    let itemDetails = await Model.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!itemDetails) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("ProductImage");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
    if (req.file) {
      console.log('itemDetails.image', itemDetails.image);
      await cloudinary.deleteFile(itemDetails.image);
      req.body.image = await cloudinary.uploadFromBuffer(req.file.buffer);
      console.log(req.body);
    }

    itemDetails = await generateCreateData(itemDetails, req.body);
    await itemDetails.save();
    return res.json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.UPDATE("ProductImage"),
      })
    );
  }),
  delete: asyncHandler(async (req, res) => {
    let query = {
      where: {
        id: req.params.id,
      },
    };

    let existing = await Model.findOne(query);
    // let deletedItem = await Model.destroy(query);
    if (existing) {
      await cloudinary.deleteFile(existing.image);
      await Model.destroy(query);
      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.DELETED("ProductImage"),
        })
      );
    } else {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("ProductImage");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
  }),
};
module.exports = modelObj;
