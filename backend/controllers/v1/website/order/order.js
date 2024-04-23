const sequelize = require("sequelize");
const OrderRepository = require("../../../../models/repository/orderRepository");
const CartRepository = require("../../../../models/repository/cartRepository");
const OrderVariantMapRepository = require("../../../../models/repository/orderVariantMapRepository");
const Order = require("../../../../models").Order;
const Variant = require("../../../../models").Variant;
const AttrVariantMap = require("../../../../models").AttrVariantMap;
const OrderVariantMap = require("../../../../models").OrderVariantMap;
const Attribute = require("../../../../models").Attribute;
const Product = require("../../../../models").Product;
const Images = require("../../../../models").Images;
const {
  OPTIONS,
  generateResponse,
  generateCreateData,
} = require("../../../../config/options/global.options");
const MESSAGES = require("../../../../config/options/messages.options");
const resCode = MESSAGES.resCode;
const Op = sequelize.Op;
const Model = Order;
const ApiError = require("../../../../config/middlewares/api.error");
const {
  asyncHandler,
} = require("../../../../config/middlewares/async.handler");
const cloudinary = require("../../../../shared/service/cloudinary.service");

const modelObj = {
  create: asyncHandler(async (req, res) => {
    req.body.customerId = req.user.id;
    let createData = await OrderRepository.create(req.body);

    if (req.body.products.length) {
      let arr = req.body.products.map((x) => {
        return {
          variantId: x.variantId,
          orderId: createData.id,
          price: x.price,
          qty: x.qty,
        };
      });
      await OrderVariantMapRepository.bulkCreate(arr);
      const query = {
        where: {
          customerId: req.user.id,
        },
      };
      if (req.body.type == "CART") {
        await CartRepository.delete(query);
      }
    }
    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.ADDED("Order"),
      })
    );
  }),

  buyNow: asyncHandler(async (req, res) => {
    let createData = await OrderRepository.create(req.body);

    await OrderVariantMap.create({
      variantId: req.body.variantId,
      orderId: createData.id,
      price: req.body.price,
      qty: req.body.qty,
    });

    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.ADDED("Order"),
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
      where: {
        customerId: req.user.id,
      },
      order: [[column, direction]],

      include: [
        {
          model: OrderVariantMap,
          as: "orderWithOrderVariantMap",
          attributes: ["variantId", "qty", "price"],
          include: [
            {
              model: Variant,
              as: "orderVariantMapWithVariant",
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
                  attributes: ["name", "hsn", "id"],
                },
                {
                  model: Images,
                  as: "variantImages",
                },
              ],
            },
          ],
        },
      ],

      offset: +offset,
      limit: +pageSize,
    };
    let response = await OrderRepository.findAll(query);

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
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Order");
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
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Order");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    } else {
      if (req.file) {
        if (itemDetails.image) {
          await cloudinary.deleteFile(itemDetails.image);
        }
        console.log("req.file.path", req.file);
        req.body.image = await cloudinary.uploadFromBuffer(req.file.buffer);
      }

      itemDetails = await generateCreateData(itemDetails, req.body);
      await itemDetails.save();
      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.UPDATE("Order"),
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

    if (item) {
      item.status = OPTIONS.defaultStatus.DELETED;
      await item.save();
      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.DELETED("Order"),
        })
      );
    } else {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Order");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
  }),

  cancelItem: asyncHandler(async (req, res) => {
    const orderId = req.body.orderId; // Assuming you're passing orderId in the request params
    const orderVariantId = req.body.orderVariantId; // Assuming you're passing orderVariantId in the request params

    try {
      // Find the order
      const order = await Model.findByPk(orderId);
      if (!order) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Order");
        throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
      }
      const orderItem = await OrderVariantMap.findOne({
        where: { id: orderVariantId, orderId: orderId },
      });
      if (!orderItem || ["dispatched", "delivered"].includes(order.status)) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Item");
        throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
      }
      // Remove the orderVariant
      await orderItem.destroy();
      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.DELETED("Item"),
        })
      );
    } catch (error) {
      console.error("Error removing orderVariant:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }),
};

module.exports = modelObj;
