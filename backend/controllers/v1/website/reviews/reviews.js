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

const reviewRepository = require("../../../../models/repository/reviewRepository");

const modelObj = {
  create: asyncHandler(async (req, res) => {
    const address = await reviewRepository.findOneByCondition({
      where: { customerId: req.user.id },
    });
    if (!address) {
      req.body.isDefault = true;
    }
    req.body.customerId = req.user.id;
    createObj = await reviewRepository.create(req.body);
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

    let response = await reviewRepository.findAndCountAll(query);
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
    let existing = await reviewRepository.findOneByCondition(query);
    if (!existing) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Address");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, existing));
  }),

  update: asyncHandler(async (req, res) => {

    let query = {
      where: {
        id: req.params.id,
      },
    };

    req.body.customerId = req.user.id;
    let itemDetails = await reviewRepository.update(req.body, query);
    if (itemDetails[0] == 0) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Address");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }

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



};

module.exports = modelObj;
