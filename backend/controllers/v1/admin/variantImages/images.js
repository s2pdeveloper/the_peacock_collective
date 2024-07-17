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
const imagesRepository=require("../../../../models/repository/adminRepo/imageRepository")

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
    } else {
      return;
    }

    // let createObj = await generateCreateData(new Model(), req.body);
    // await createObj.save();
    
     await imagesRepository.create(req.body);
    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.ADDED("Image"),
      })
    );
  }),

  getAll: asyncHandler(async (req, res) => {
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
    // let response = await Model.findAndCountAll(query);
    let response=await imagesRepository.findAndCountAll(query);
    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, response));
  }),

  getById: asyncHandler(async (req, res) => {
    // let existing = await Model.findOne({
    //   where: {
    //     id: req.params.id,
    //   },
    // });


    let query={
      where: {
        id: req.params.id,
      },
    }

    let existing=await imagesRepository.findOneByCondition(query);

    if (!existing) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("ProductImage");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, existing));
  }),

  getByVariantId: asyncHandler(async (req, res) => {
    // let existing = await Model.findAll({
    //   where: {
    //     variantId: req.params.id,
    //   },
    // });

    let query={
      where: {
        variantId: req.params.id,
      },
    }
    let existing =await imagesRepository.findAll(query);

    // if (!existing) {
    //   let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("ProductImage");
    //   throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    // }
    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, existing));
  }),

  update: asyncHandler(async (req, res) => {
    // let itemDetails = await Model.findOne({
    //   where: {
    //     id: req.params.id,
    //   },
    // });

  let query={
    where: {
      id: req.params.id,
    },
  }

  let itemDetails=await imagesRepository.findOneByCondition(query);
    if (!itemDetails) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("ProductImage");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
    if (req.file) {
      await cloudinary.deleteFile(itemDetails.image);
      req.body.image = await cloudinary.uploadFromBuffer(req.file.buffer);
    }

    // itemDetails = await generateCreateData(itemDetails, req.body);
    // await itemDetails.save();
    await imagesRepository.create(req.body);

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

    // let existing = await Model.findOne(query);
    let deleted=await imagesRepository.delete(query);
    // let deletedItem = await Model.destroy(query);
    if (deleted!=0) {
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
