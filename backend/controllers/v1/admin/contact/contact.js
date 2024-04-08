const sequelize = require("sequelize");
const contactRepository = require("../../../../models/repository/contactRepository");
const {
  OPTIONS,
  generateResponse,
} = require("../../../../config/options/global.options");
const MESSAGES = require("../../../../config/options/messages.options");
const resCode = MESSAGES.resCode;
const {
  asyncHandler,
} = require("../../../../config/middlewares/async.handler");

const modelObj = {

  getAll: asyncHandler(async (req, res) => {
    const {
      page = 1,
      pageSize = 10,
      column = "createdAt",
      direction = "DESC",
    } = req.query;
    let offset = (page - 1) * pageSize || 0;
    let query = {
      order: [[column, direction]],
      offset: +offset,
      limit: +pageSize,
    };
    let contact = await contactRepository.findAndCountAll(query);
    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, contact));
  }),
};

module.exports = modelObj;
