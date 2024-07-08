const ApiError = require("../../../../config/middlewares/api.error");
const {
  asyncHandler,
} = require("../../../../config/middlewares/async.handler");
const {
  generateResponse,
} = require("../../../../config/options/global.options");
const MESSAGES = require("../../../../config/options/messages.options");
const TransactionsRepository = require("../../../../models/repository/transactionRepository");
const { Customer } = require("../../../../models");
const modelObj = {
  create: asyncHandler(async (req, res) => {
    await TransactionsRepository.create(req.body);
    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.ADDED("Transactions"),
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
          model: Customer,
          as: "transactionWithCustomer",
          attributes: ["firstName", "lastName"],
        },
      ],

      offset: +offset,
      limit: +pageSize,
    };
    let response = await TransactionsRepository.findAll(query);

    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, response));
  }),

  // update: asyncHandler(async (req, res) => {
  //   const query = {
  //     where: {
  //       customerId: req.user.id,
  //       id : req.params.id
  //     },
  //   };
  //   let itemDetails = await TransactionsRepository.findOneByCondition(query);

  //   if (!itemDetails) {
  //     let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Order");
  //     throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
  //   } else {
  //     itemDetails = await TransactionsRepository.update(req.body, query);
  //     return res.json(
  //       generateResponse(resCode.HTTP_OK, {
  //         message: MESSAGES.apiSuccessStrings.UPDATE("Order"),
  //       })
  //     );
  //   }
  // }),
  // delete: asyncHandler(async (req, res) => {
  //   let query = {
  //     where: {
  //       id: req.params.id,
  //     },
  //   };
  //   let item = await Model.findOne(query);

  //   if (item) {
  //     item.status = OPTIONS.defaultStatus.REJECTED;
  //     await item.save();
  //     return res.json(
  //       generateResponse(resCode.HTTP_OK, {
  //         message: MESSAGES.apiSuccessStrings.DELETED("Order"),
  //       })
  //     );
  //   } else {
  //     let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Order");
  //     throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
  //   }
  // }),
};

module.exports = modelObj;
