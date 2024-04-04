const sequelize = require("sequelize");
const CartRespository = require("../../../../models/repository/cartRepository");
const Product = require("../../../../models").Product;
const AttrVariantMap = require("../../../../models").AttrVariantMap;
const Attribute = require("../../../../models").Attribute;
const Images = require("../../../../models").Images;
const Variant = require("../../../../models").Variant;
const {
  OPTIONS,
  generateResponse,
} = require("../../../../config/options/global.options");
const MESSAGES = require("../../../../config/options/messages.options");
const resCode = MESSAGES.resCode;
const Op = sequelize.Op;

const ApiError = require("../../../../config/middlewares/api.error");
const {
  asyncHandler,
} = require("../../../../config/middlewares/async.handler");

const modelObj = {
  create: asyncHandler(async (req, res) => {
    const checkExisting = await CartRespository.findOneByCondition({
      where: {
        variantId: req.body.variantId,
      },
    });
    if (checkExisting) {
      (checkExisting.qty += 1), await checkExisting.save();
    } else {
      await CartRespository.create(req.body);
    }
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
    } = req.query;
    console.log("you hit the GetAll", req.query);
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
          attributes: ["price", "qty"],
          include: [
            {
              model: AttrVariantMap,
              as: "variantWithAttrVariantMap",
              include: {
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
          ],
        },
      ],
      offset: +offset,
      limit: +pageSize,
    };
    let carts = await CartRespository.findAndCountAll(query);
    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, carts));
  }),

  getById: asyncHandler(async (req, res) => {
    let query = {
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Variant,
          as: "cartWithVariants",
          // /paranoid: true, required: false,
          attributes: ["price", "qty"],
          include: [
            {
              model: AttrVariantMap,
              as: "variantWithAttrVariantMap",
              include: {
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
          ],
        },
      ],
    };
    let existing = await CartRespository.findOneByCondition(query);
    if (!existing) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Cart");
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
    console.log("your req.body",req.body)
    let cart = await CartRespository.update(req.body, query);
    if (cart[0] == 0) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Cart");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    } else {
      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.UPDATE("Cart"),
        })
      );
    }
  }),

  

  remove: asyncHandler(async (req, res) => {
    let query = {
      where: {
        id: req.params.id,
      },
    };
    let deleted = await CartRespository.delete(query);
    console.log("deleteItem", deleted);
    if (deleted != 0) {
      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.DELETED("Cart"),
        })
      );
    } else {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Cart");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
  }),
  updateAll: asyncHandler(async (req, res) => {
    if (req.body.delete.length > 0) {
      let query = {
        where: {
          id: req.body.delete,
        },
      };
      await Model.destroy(query);
    }
    if (req.body.edit.length > 0) {
      let promissArr = req.body.edit.map((x) => {
        return Model.update(
          { qty: x.qty },
          {
            where: {
              id: x.id,
            },
          }
        );
      });
      Promise.all(promissArr).then((values) => {
        console.log(values);
      });
    }

    return res.json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.UPDATE("Cart"),
      })
    );
  }),
};

module.exports = modelObj;
