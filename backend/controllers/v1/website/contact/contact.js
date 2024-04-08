const sequelize = require("sequelize");
const contactRepository = require("../../../../models/repository/contactRepository");
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
      await contactRepository.create(req.body);
    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.ADDED("Query"),
      })
    );
  }),


};

module.exports = modelObj;
