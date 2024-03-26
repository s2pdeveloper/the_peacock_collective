const Sequelize = require('sequelize');
const { Product, ProdAttributeMap, Attribute, Categories, Variant } = require("../../../../models");
const {
  OPTIONS,
  generateResponse,
  generateCreateData,
} = require("../../../../config/options/global.options");
const MESSAGES = require("../../../../config/options/messages.options");
const resCode = MESSAGES.resCode;
const Op = Sequelize.Op;

const Model = Product;
const ApiError = require("../../../../config/middlewares/api.error");
const {
  asyncHandler,
} = require("../../../../config/middlewares/async.handler");
const cloudinary = require("../../../../shared/service/cloudinary.service");


module.exports.getAllCategory = asyncHandler(async (req, res) => {

  let query = {
    where: {
      parentId: null
    },
    order: [[column, direction]],
    include: {
      model: Categories,
      as: 'subcatagories',
    },
  };

  const promissArr = [
    Categories.findAll(query),
    Product.findAll({}),
    Attribute.findAll({}),
    Variant.findAll({}),
  ]
  Promise.all(promissArr).then((values) => {
    const result = {
      categories: values[0],
      products: values[1],
      attributes: values[2],
      variants: values[3],
    }
    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, result));
  });


})


