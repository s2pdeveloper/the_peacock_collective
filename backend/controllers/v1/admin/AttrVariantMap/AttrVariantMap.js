const sequelize = require("sequelize");
const { AttrVariantMap } = require("../../../../models");
const fs = require("fs");
const {
  OPTIONS,
  generateResponse,
  generateCreateData,
} = require("../../../../config/options/global.options");
const MESSAGES = require("../../../../config/options/messages.options");
const resCode = MESSAGES.resCode;
const Op = sequelize.Op;
const Model = AttrVariantMap;
const ApiError = require("../../../../config/middlewares/api.error");
const {
  asyncHandler,
} = require("../../../../config/middlewares/async.handler");

const attrVariantMapRepository=require("../../../../models/repository/adminRepo/attrVariantMapRepository");



const modelObj = {
  create: asyncHandler(async (req, res) => {
    // let createObj = await generateCreateData(new Model(), req.body);
    // await createObj.save();

  await attrVariantMapRepository.create(req.body);

    
    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.ADDED("AttrVariantMap"),
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

    let response=await attrVariantMapRepository.findAndCountAll(query);
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
    let existing=await attrVariantMapRepository.findOneByCondition(query);
    if (!existing) {
      let errors =
        MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("AttrVariantMap");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
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

    let itemDetails=await attrVariantMapRepository.findOneByCondition(query);
    if (!itemDetails) {
      let errors =
        MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("AttrVariantMap");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
    // itemDetails = await generateCreateData(itemDetails, req.body);
    // await itemDetails.save();

    await attrVariantMapRepository.create(req.body);
    return res.json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.UPDATE("AttrVariantMap"),
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
    let existing =await attrVariantMapRepository.findOneByCondition(query);
    if (existing) {
      await Model.destroy(query);
      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.DELETED("AttrVariantMap"),
        })
      );
    } else {
      let errors =
        MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("AttrVariantMap");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
  }),
};
module.exports = modelObj;
