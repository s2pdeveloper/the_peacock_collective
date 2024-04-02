const sequelize = require("sequelize");
const {
  Order,
  Cart,
  Customer,
  Variant,
  OrderVariantMap,
  Address,
} = require("../../../../models");
const fs = require("fs");
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
    console.log("++++++req.body++++++", req.body);
    let createData = await generateCreateData(new Model(), req.body);
    // console.log("createData", createData);
    let newOrder = await createData.save();

    let query = {
      where: {
        customerId: req.body.customerId,
      },
    };
    let carts = await Cart.findAll(query);

    console.log("you got your cats",carts)
    if (carts.length) {
      let arr = carts.map((x) => {
        return {
          variantId: x.variantId,
          orderId: newOrder.id,
          price: x.price,
          qty: x.qty,
        };
      });
      console.log("++++++++your cart data++++++++",carts);
      console.log("Your array of cart to create orderVariantMap",arr);
      await OrderVariantMap.bulkCreate(arr);
      await Cart.destroy(query);
    }

    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.ADDED("Order"),
      })
    );
  }),

  buyNow: asyncHandler(async (req, res) => {
    let createData = await generateCreateData(new Model(), req.body);
    let newOrder = await createData.save();

      await OrderVariantMap.create({
        variantId:req.body.variantId,
          orderId: newOrder.id,
          price:req.body.price,
          qty:req.body.qty,
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
      // where: {
      //   ...(![undefined, null,''].includes(search) && {
      //     [Op.or]: {
      //       name: { [Op.like]: search },
      //       description: { [Op.like]: search },
      //     },
      //   }),
      //   ...(catagory && {
      //     parentId: {
      //       [Op.ne]: null
      //     }
      //   })

      // },
      order: [[column, direction]],
      // attributes: {
      //   exclude: ['userId'],
      // },

      include: [
        {
          model: Address,
          as: "address",
          attributes: ["city", "country", "pinCode", "type", "name"],
        },
        {
          model: Customer,
          as: "customer",
          attributes: ["firstName", "lastName", "phone"],
        },
        {
          model: OrderVariantMap,
          as: "orderWithOrderVariantMap",
          attributes: ["price", "qty"],
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
};

module.exports = modelObj;
