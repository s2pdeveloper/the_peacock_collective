const sequelize = require("sequelize");
const { Tag } = require("../../../../models");
const {
  OPTIONS,
  generateResponse,
  generateCreateData,
} = require("../../../../config/options/global.options");
const MESSAGES = require("../../../../config/options/messages.options");
const resCode = MESSAGES.resCode;
const Op = sequelize.Op;
const Model = Tag;
const ApiError = require("../../../../config/middlewares/api.error");
const {
  asyncHandler,
} = require("../../../../config/middlewares/async.handler");
const TagRepository = require("../../../../models/repository/tagRepository");

const modelObj = {
  create: asyncHandler(async (req, res) => {
    let checkExisting = await Model.findOne({
      where: {
        title: req.body.title,
      },
    });
    if (checkExisting) {
      let message = MESSAGES.apiErrorStrings.Data_EXISTS("Tag");
      throw new ApiError(message, resCode.HTTP_BAD_REQUEST);
    }
    let createObj = await generateCreateData(new Model(), req.body);
    await createObj.save();
    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.ADDED("Tag"),
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
        ...(![undefined, null, ""].includes(search) && {
          [Op.or]: {
            name: { [Op.like]: search },
            title: { [Op.like]: search },
          },
        }),
      },
      order: [[column, direction]],
      offset: +offset,
      limit: +pageSize,
    };
    let response = await TagRepository.findAll(query);

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
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Tag");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
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
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Tag");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    } else {
      itemDetails = await generateCreateData(itemDetails, req.body);
      await itemDetails.save();
      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.UPDATE("Tag"),
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
    let deletedItem = await Model.destroy(query);
    if (deletedItem) {
      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.DELETED("Tag"),
        })
      );
    } else {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Tag");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
  }),
};

module.exports = modelObj;
