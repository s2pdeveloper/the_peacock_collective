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
    const { financialYearStart, financialYearEnd } = getCurrentFinancialYearDates();

    const TodayOrderQuery = {
      where: {
        createdAt: {
          [Op.between]: [startOfDay, endOfDay],
        },
      },
    };
    const MonthlyOrderQuery = {
      where: {
        createdAt: {
          [Op.between]: [financialYearStart, financialYearEnd],
        },
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
          yearlyOrder: values[4].rows,
          yearlyOrderValue: values[4].rows.reduce((accu, curr) => accu + (curr.amount ?? 0), 0),
          todayOrderValue: values[5].rows.reduce((accu, curr) => accu + (curr.amount ?? 0), 0),
          todayOrderCount: values[5].count
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
function getCurrentFinancialYearDates() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // 0 is January, 11 is December

  let financialYearStart;
  let financialYearEnd;

  if (month >= 3) { // April (3) or later
    financialYearStart = new Date(year, 3, 1); // April 1st of the current year
    financialYearEnd = new Date(year + 1, 2, 31); // March 31st of the next year
  } else { // January, February, March
    financialYearStart = new Date(year - 1, 3, 1); // April 1st of the previous year
    financialYearEnd = new Date(year, 2, 31); // March 31st of the current year
  }

  return {
    financialYearStart: financialYearStart.setHours(0, 0, 0, 0), // Format as needed
    financialYearEnd: financialYearEnd.setHours(23, 59, 59, 999) // Format as needed
  };
}


module.exports = modelObj;
