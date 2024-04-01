const sequelize = require("sequelize");
const { Address } = require("../../../../models");
const fs = require("fs");
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
const cloudinary = require("../../../../shared/service/cloudinary.service");

const modelObj = {
  create: asyncHandler(async (req, res) => {
    const address = await Model.findOne({ where: { name: req.body.name } });
    if (!address) {
      req.body.isDefault = true;
    }
    let createObj = await generateCreateData(new Model(), req.body);
    await createObj.save();
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
      search = null,
      catagory = false,
    } = req.query;
    let offset = (page - 1) * pageSize || 0;
    let query = {
      where: {
        ...(![undefined, null, ""].includes(search) && {
          [Op.or]: {
            name: { [Op.like]: search },
            description: { [Op.like]: search },
          },
        }),
        ...(catagory && {
          parentId: {
            [Op.ne]: null,
          },
        }),
      },
      order: [[column, direction]],
      // attributes: {
      //   exclude: ['userId'],
      // },
      //   include: {
      //     model: User,
      //     as: 'shop',
      //     attributes: ['firstName'],
      //   },
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
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Address");
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

    // console.log("itemDetails============", itemDetails);
    if (!itemDetails) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Address");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }

    itemDetails = await generateCreateData(itemDetails, req.body);
    await itemDetails.save();
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
    let item = await Model.findOne(query);
    if (item && item?.image) {
      await cloudinary.deleteFile(item.image);
    }

    let deletedItem = await Model.destroy(query);
    console.log("deletedItemdeletedItem", deletedItem);
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

  getAllByUserId: asyncHandler(async (req, res, next) => {
    const {
      page = 1,
      pageSize = 10,
      column = "createdAt",
      direction = "DESC",
      search = null,
      catagory = false,
    } = req.query;
    // let userId = req.params.id;
    let offset = (page - 1) * pageSize || 0;
    let query = {
      where: {
        customerId: req.params.id,
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

  makeDefault: asyncHandler(async (req, res, next) => {
    const updated = await Model.update(
      { isDefault: false },
      { where: { customerId: req.body.customerId } }
    );
    const address = await Model.findOne({ where: { id: req.body.addressId } });
    if (!address) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Address");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
    await Model.update(
      { isDefault: true },
      { where: { id: req.body.addressId } }
    );

    return res.json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.UPDATE("Address"),
      })
    );
  }),
};

module.exports = modelObj;
