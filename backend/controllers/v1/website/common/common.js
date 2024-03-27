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


module.exports.getAllCategory = asyncHandler(async (req, res) => {

  let column = "createdAt";
  let direction = "ASC";

  let categoryQuery = {
    where: {
      parentId: null
    },
    include: {
      model: Categories,
      as: 'subcatagories',
    },
    order: [[column, direction]],
  };
  let variantQuery = {
    where: {
      price: {
        [Op.gte]: 1,
      },
    },
    order: [[column, direction]],
  };

  const promissArr = [
    Categories.findAll(categoryQuery),
    Product.findAll({}),
    Attribute.findAll({}),
    Variant.findAll(variantQuery),
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
  }).catch(err => {
    throw new ApiError('Internal Server Error', resCode.HTTP_INTERNAL_SERVER_ERROR);
  });


})


