const sequelize = require("sequelize");
const {Vendor} = require("../../../../models");
const fs = require("fs");
const {
  OPTIONS,
  generateResponse,
  generateCreateData,
} = require("../../../../config/options/global.options");

const MESSAGES = require("../../../../config/options/messages.options");
const resCode = MESSAGES.resCode;
const Op = sequelize.Op;
 const Model = Vendor;
const ApiError = require("../../../../config/middlewares/api.error");
const {
  asyncHandler,
} = require("../../../../config/middlewares/async.handler");
const vendorRepository=require("../../../../models/repository/adminRepo/vendorRepository")

const modelObj = {
  create: asyncHandler(async (req, res) => {
    // let checkExisting = await Model.findOne({
    //   where: {
    //     companyName: req.body.companyName,
    //   },
    // });

    let query={
      where: {
        companyName: req.body.companyName,
      },
    }

    let checkExisting=await vendorRepository.findOneByCondition(query);

    if (checkExisting) {
      let message = MESSAGES.apiErrorStrings.Data_EXISTS("vendor");
      throw new ApiError(message, resCode.HTTP_BAD_REQUEST);
    }


    // let createObj = await generateCreateData(new Model(), req.body);
    // await createObj.save();

    await vendorRepository.create(req.body);

    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.ADDED("vendor"),
      })
    );
  }),

  getAll: asyncHandler(async (req, res) => {
    console.log("your model",Model)
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
    let response= await vendorRepository.findAndCountAll(query)
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
    let existing=await vendorRepository.findOneByCondition(query);

    if (!existing) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Vendor");
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
 let itemDetails=await vendorRepository.findOneByCondition(query);
    if (!itemDetails) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Vendor");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    } else {
      // itemDetails = await generateCreateData(itemDetails, req.body);
      // await itemDetails.save();
      await vendorRepository.update(req.body,query);
      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.UPDATE("Vendor"),
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
    // let deletedItem = await Model.destroy(query);
    let deletedItem=await vendorRepository.delete(query);
    if (deletedItem!==0) {
      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.DELETED("Vendor")
        })
      );
    } else {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Vendor");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
  }),
};

module.exports = modelObj;
