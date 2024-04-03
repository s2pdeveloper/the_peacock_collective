const sequelize = require("sequelize");
const { Cart, Variant, Product,AttrVariantMap,Attribute,Images } = require("../../../../models");
const fs = require("fs");
const {
  OPTIONS,
  generateResponse,
  generateCreateData,
} = require("../../../../config/options/global.options");
const MESSAGES = require("../../../../config/options/messages.options");
const resCode = MESSAGES.resCode;
const Op = sequelize.Op;
const Model = Cart;
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
      (checkExisting.price += req.body.price),
        (checkExisting.qty += req.body.qty),
        await checkExisting.save();
      // let message = MESSAGES.apiErrorStrings.Data_EXISTS("Cart");
      // throw new ApiError(message, resCode.HTTP_BAD_REQUEST);
    } else {
      let createObj = await generateCreateData(new Model(), req.body);
      await createObj.save();
    }

    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.ADDED("Cart"),
      })
    );
  }),

  getAllByCustomerId: asyncHandler(async (req, res) => {
    const {
      page = 1,
      pageSize = 10,
      column = "createdAt",
      direction = "DESC",
    } = req.query;
    let offset = (page - 1) * pageSize || 0;
    let query = {
      where: {
        customerId: req.params.id,
      },
      order: [[column, direction]],
      include: [
        {
          model: Variant,
          as: "cartWithVariants",
          // paranoid: true, required: false,
          attributes: ["price", "qty"],
         include :[
          {
            model: AttrVariantMap,
            as: 'variantWithAttrVariantMap',
            // paranoid: true, required: false,
            // attributes: ['id', 'name', 'mobile'],
            include:{
              model: Attribute,
              as: "AttrVariantMapWithAttributes",
              // attributes: ["name", "hsn"],
             
            },
            
          },
          {
            model: Product,
            as: "variantWithProduct",
            attributes: ["name", "hsn"],
           
          },
            {
            model: Images,
            as: "variantImages",
    
           
          },
         ] 
        },
     
      ],
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
  update: asyncHandler(async (req, res) => {
    let itemDetails = await Model.findOne({
      where: {
        id: req.params.id,
      },
    });

    // console.log("itemDetails============", itemDetails);
    if (!itemDetails) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Categories");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    } else {
      itemDetails = await generateCreateData(itemDetails, req.body);

      await itemDetails.save();

      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.UPDATE("Categories"),
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
    if (item && item?.image) {
      await cloudinary.deleteFile(item.image);
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
