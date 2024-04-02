const sequelize = require("sequelize");
const { Cart, Variant, WishList } = require("../../../../models");
const fs = require("fs");
const {
  OPTIONS,
  generateResponse,
  generateCreateData,
} = require("../../../../config/options/global.options");
const MESSAGES = require("../../../../config/options/messages.options");
const resCode = MESSAGES.resCode;
const Op = sequelize.Op;
const Model = WishList;
const ApiError = require("../../../../config/middlewares/api.error");
const {
  asyncHandler,
} = require("../../../../config/middlewares/async.handler");
const cloudinary = require("../../../../shared/service/cloudinary.service");

const modelObj = {
  create: asyncHandler(async (req, res) => {
    let checkExisting = await Model.findOne({
      where: {
        variantId: req.body.variantId,
      },
    });
    if (checkExisting) {
      let message = MESSAGES.apiErrorStrings.Data_EXISTS("Already in WishList");
      throw new ApiError(message, resCode.HTTP_BAD_REQUEST);
    }
    let createObj = await generateCreateData(new Model(), req.body);
    await createObj.save();

    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.ADDED("Cart"),
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
        customerId: req.params.id,
      },
      order: [[column, direction]],
      include: {
        model: Variant,
        as: "variantWithWishList",
        // paranoid: true, required: false,
        attributes: ["price", "qty"],
      },
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
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Categories");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, existing));
  }),



//   update: asyncHandler(async (req, res) => {
//     let itemDetails = await Model.findOne({
//       where: {
//         id: req.params.id,
//       },
//     });
//     // console.log("itemDetails============", itemDetails);
//     if (!itemDetails) {
//       let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Categories");
//       throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
//     } else {
//       if (req.file) {
//         if (itemDetails.image) {
//           await cloudinary.deleteFile(itemDetails.image);
//         }
//         console.log("req.file.path", req.file);
//         req.body.image = await cloudinary.uploadFromBuffer(req.file.buffer);
//       }

//       itemDetails = await generateCreateData(itemDetails, req.body);

//       await itemDetails.save();

//       return res.json(
//         generateResponse(resCode.HTTP_OK, {
//           message: MESSAGES.apiSuccessStrings.UPDATE("Categories"),
//         })
//       );
//     }
//   }),




  delete: asyncHandler(async (req, res) => {
    let query = {
      where: {
        id: req.params.id,
      },
    };
    let item = await Model.findOne(query);

    if (!item) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("WishList");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }

    let deletedItem = await Model.destroy(query);
    console.log("deletedItemdeletedItem", deletedItem);
    if (deletedItem) {
      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.DELETED("Categories"),
        })
      );
    } else {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Categories");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
  }),
};

module.exports = modelObj;
