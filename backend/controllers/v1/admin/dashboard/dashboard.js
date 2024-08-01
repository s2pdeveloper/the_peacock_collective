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
    const {
      page = 1,
      pageSize = 10,
      column = "createdAt",
      direction = "DESC",
      search = null,
    } = req.query;
    let offset = (page - 1) * pageSize || 0;
    // let query = {
    //   where: {
    //     ...(![undefined, null, ""].includes(search) && {
    //       [Op.or]: {
    //         name: { [Op.like]: search },
    //         description: { [Op.like]: search },
    //       },
    //     }),
    //   },
    //   order: [[column, direction]],

    //   include: {
    //     model: CategoryTagMap,
    //     as: 'categoryWithtags',
    //     attributes: ['tagId'],
    //     include : {
    //       model: Tag,
    //       as: 'CategoryTagMapWithTag',
    //       attributes: ['title'],
    //     }
    //   },
    //   ...(req.query.page &&
    //     req.query.pageSize && {
    //     offset: +offset,
    //     limit: +pageSize,
    //   }),
    // };
    let monthData = await getMonthlySale();
    promissArr = [
      customerRepository.countAll(),
      transactionRepository.countAll(),
      categoryRepository.countAll(),
      productRepository.countAll(),
    ];

    Promise.all(promissArr)
      .then((values) => {
        console.log("values", values);

        const result = {
          customers: values[0],
          transactions: values[1],
          categories: values[2],
          products: values[3],
          monthData : monthData
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
const getMonthlySale = async () => {
  let currDate = new Date()
  let query = {
    where: {
      [Op.and]: [
        sequelize.where(
          sequelize.fn("MONTH", sequelize.col('createdAt')),
          currDate.getMonth()+1
        ),
        sequelize.where(
          sequelize.fn("YEAR", sequelize.col('createdAt')),
          currDate.getFullYear()
        ),
      ],
    },

    // include: {
    //   model: CategoryTagMap,
    //   as: 'categoryWithtags',
    //   attributes: ['tagId'],
    //   include : {
    //     model: Tag,
    //     as: 'CategoryTagMapWithTag',
    //     attributes: ['title'],
    //   }
    // },
  };
  // let response = await Model.findAndCountAll(query);

  let response = await orderRepository.findAndCountAll(query);
  return response;
};

module.exports = modelObj;
