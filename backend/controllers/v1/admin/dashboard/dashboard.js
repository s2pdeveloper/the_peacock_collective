const sequelize = require("sequelize");
const {
  OPTIONS,
  generateResponse,
  generateCreateData,
} = require("../../../../config/options/global.options");
const MESSAGES = require("../../../../config/options/messages.options");
const resCode = MESSAGES.resCode;
const Op = sequelize.Op;
const ApiError = require("../../../../config/middlewares/api.error");
const {
  asyncHandler,
} = require("../../../../config/middlewares/async.handler");
const categoryRepository = require("../../../../models/repository/categoryRepository");
const customerRepository = require("../../../../models/repository/CustomerRepository");
const transactionRepository = require("../../../../models/repository/transactionRepository");
const productRepository = require("../../../../models/repository/adminRepo/productRepository");
const orderRepository = require("../../../../models/repository/orderRepository");
const modelObj = {
  getAll: asyncHandler(async (req, res) => {


    const currDate = new Date();
    const startOfDay = new Date(currDate.setHours(0, 0, 0, 0));
    const endOfDay = new Date(currDate.setHours(23, 59, 59, 999));

    const TodayOrderQuery = {
      where: {
        createdAt: {
          [Op.between]: [startOfDay, endOfDay],
        },
      },
    };
    const MonthlyOrderQuery = {
      where: {
        [Op.and]: [
          sequelize.where(sequelize.fn("MONTH", sequelize.col('createdAt')), currDate.getMonth() + 1),
          sequelize.where(sequelize.fn("YEAR", sequelize.col('createdAt')), currDate.getFullYear()),
        ],
      },
    };


    promissArr = [
      customerRepository.countAll(),
      transactionRepository.countAll(),
      categoryRepository.countAll(),
      productRepository.countAll(),
      orderRepository.findAndCountAll(MonthlyOrderQuery),
      orderRepository.findAndCountAll(TodayOrderQuery)
    ];

    Promise.all(promissArr)
      .then((values) => {
        console.log("values", values);

        const result = {
          customers: values[0],
          transactions: values[1],
          categories: values[2],
          products: values[3],
          monthlyOrder: values[4],
          todayOrder: values[5],
        };
        return res
          .status(resCode.HTTP_OK)
          .json(generateResponse(resCode.HTTP_OK, result));
      })
      .catch((err) => {
        console.log("err", err);
        throw new ApiError(
          "Internal Server Error",
          resCode.HTTP_INTERNAL_SERVER_ERROR
        );
      });
  }),
};


module.exports = modelObj;
