const sequelize = require("sequelize");
const { Address } = require("../../../../models");
const {
  OPTIONS,
  generateResponse,
  generateCreateData,
} = require("../../../../config/options/global.options");
const MESSAGES = require("../../../../config/options/messages.options");
const resCode = MESSAGES.resCode;
const Op = sequelize.Op;
const Model = Address;
const ApiError = require("../../../../config/middlewares/api.error");
const {
  asyncHandler,
} = require("../../../../config/middlewares/async.handler");

const addressRepository = require("../../../../models/repository/addressRepository");

const modelObj = {
  create: asyncHandler(async (req, res) => {
    const address = await addressRepository.findOneByCondition({
      where: { customerId: req.user.id },
    });
    if (!address) {
      req.body.isDefault = true;
    }
    req.body.customerId = req.user.id;
    createObj = await addressRepository.create(req.body);
    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.ADDED("Address"),
      })
    );
  }),

  getAll: asyncHandler(async (req, res) => {
    const {
      page = 1,
      pageSize = 10,
      column = "createdAt",
      direction = "DESC",
    } = req.query;
    let offset = (page - 1) * pageSize || 0;
    let query = {
      where: { customerId: req.user.id },
      order: [[column, direction]],
      offset: +offset,
      limit: +pageSize,
    };

    let response = await addressRepository.findAndCountAll(query);
    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, response));
  }),

  getById: asyncHandler(async (req, res) => {
    let query = {
      where: {
        id: req.params.id,
      },
    };
    let existing = await addressRepository.findOneByCondition(query);
    if (!existing) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Address");
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

    let query = {
      where: {
        id: req.params.id,
      },
    };

    // let itemDetails=await addressRepository.findOneByCondition(query);
    req.body.customerId = req.user.id;
    let itemDetails = await addressRepository.update(req.body, query);
    if (itemDetails[0] == 0) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Address");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
    // itemDetails = await generateCreateData(itemDetails, req.body);
    // await itemDetails.save();
    return res.json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.UPDATE("Address"),
      })
    );
  }),

  delete: asyncHandler(async (req, res) => {
    let query = {
      where: {
        id: req.params.id,
      },
    };
    // let item = await Model.findOne(query);
    // let item = await addressRepository.delete(query);
    let deletedItem = await Model.destroy(query);
    if (deletedItem) {
      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.DELETED("Address"),
        })
      );
    } else {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Address");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
  }),

  // getAllByCustomerId: asyncHandler(async (req, res, next) => {
  //   const {
  //     page = 1,
  //     pageSize = 10,
  //     column = "createdAt",
  //     direction = "DESC",
  //     search = null,
  //   } = req.query;
  //   let offset = (page - 1) * pageSize || 0;
  //   let query = {
  //     where: {
  //       customerId:req.user.id,
  //     },
  //     order: [[column, direction]],
  //     offset: +offset,
  //     limit: +pageSize,
  //   };
  //   // let response = await Model.findAndCountAll(query);
  //   let response =await addressRepository.findAndCountAll(query);

  //   return res
  //     .status(resCode.HTTP_OK)
  //     .json(generateResponse(resCode.HTTP_OK, response));
  // }),

  makeDefault: asyncHandler(async (req, res, next) => {
    let existing = await addressRepository.findByPk(req.body.addressId);
    let existingDefault = await addressRepository.findOneByCondition( {
      where: { isDefault:true }
    });
    if (existing && existing.isDefault == false) {
      const address = await addressRepository.update(
        { isDefault: true },
        { where: { id: req.body.addressId } }
      );
    }
    await addressRepository.update(
      { isDefault: false },
      { where: { id: existingDefault.id } }
    );

    if (!existing) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Address");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
    return res.json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.UPDATE("Address"),
      })
    );
  }),
};

module.exports = modelObj;
