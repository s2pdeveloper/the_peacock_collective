const sequelize = require('sequelize');
const fs = require('fs');
const {
  OPTIONS,
  generateResponse,
  generateCreateData,
} = require('../../../../config/options/global.options');
const MESSAGES = require('../../../../config/options/messages.options');
const CustomerRepository = require('../../../../models/repository/CustomerRepository');
const User = require('../../../../models').User;
const Customer = require('../../../../models').Customer;
// const CustomerRepository = require('../../../../models/repository/CustomerRepository');
const resCode = MESSAGES.resCode;
const Op = sequelize.Op;


const modelObj = {
  create: async (req, res) => {
    try {
      let checkExisting = await CustomerRepository.findOneByCondition({
        where: {
          name: req.body.name,
          mobile: req.body.mobile,
        },
      });
      if (checkExisting) {
        if (
          ![undefined, null, ''].includes(req.file) &&
          fs.existsSync(req.file.path)
        ) {
          fs.unlinkSync(req.file.path);
        }
        let errors = MESSAGES.apiErrorStrings.Data_EXISTS('Customer');
        return res
          .status(resCode.HTTP_BAD_REQUEST)
          .json(
            generateResponse(
              resCode.HTTP_BAD_REQUEST,
              errors,
              MESSAGES.errorTypes.OAUTH_EXCEPTION
            )
          );
      }
      req.body.userId = req.user.id;

      if (![undefined, null, ''].includes(req.file)) {
        req.body.image = req.file.filename;
      }
      await CustomerRepository.create(req.body);
      return res.status(resCode.HTTP_OK).json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.ADDED(`Customer`),
        })
      );
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res
        .status(resCode.HTTP_INTERNAL_SERVER_ERROR)
        .json(generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, errors));
      throw new Error(e);
    }
  },
  getAll: async (req, res) => {
    try {
      const {
        page = 1,
        pageSize = 10,
        column = 'createdAt',
        direction = 'DESC',
        search = null,
        startPrice = null,
        endPrice = null,
      } = req.query;
      let offset = (page - 1) * pageSize || 0;
      let query = {
        where: {
          // ...(req.user.role == OPTIONS.usersRoles.SHOP_KEEPER && {
          //   userId: { [Op.substring]: req.user.id },
          // }),

          ...(![undefined, null, ''].includes(search) && {
            [Op.or]: {
              name: { [Op.substring]: search },
              mobile: { [Op.substring]: search },
              anotherMobile: { [Op.substring]: search },
              address: { [Op.substring]: search },
              email: { [Op.substring]: search },
            },
          }),
        },
        order: [[column, direction]],
        attributes: {
          exclude: ['userId'],
        },
        include: {
          model: User,
          as: 'shop',
          attributes: ['id', 'name', 'mobile'],
        },
        offset: +offset,
        limit: +pageSize,
      };
      let response = await CustomerRepository.findAndCountAll(query);
      [response.range] = await Model.findAll({
        attributes: [
          [sequelize.fn('min', sequelize.col('balance')), 'startPrice'],
          [sequelize.fn('max', sequelize.col('balance')), 'endPrice'],
        ],
        raw: true,
      });
      if (!response.rows) {
        return res.status(resCode.HTTP_BAD_REQUEST).json(
          generateResponse(resCode.HTTP_BAD_REQUEST, {
            message: MESSAGES.apiSuccessStrings.EMPTY('Customer'),
          })
        );
      }
      return res
        .status(resCode.HTTP_OK)
        .json(generateResponse(resCode.HTTP_OK, response));
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res
        .status(resCode.HTTP_INTERNAL_SERVER_ERROR)
        .json(generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, errors));
      throw new Error(e);
    }
  },
  getAllCustomerDashBoard: async (req, res) => {
    try {
      const {
        pageSize = 5,
        column = 'balance',
        direction = 'DESC',
      } = req.query;
      console.log("req.user.id", req.user.id);
      let query = {
        where: {
          ...(![undefined, null, ''].includes(req.user.id) && {
            userId: { [Op.substring]: req.user.id },
          }),
        },
        order: [[column, direction]],
        offset: 0,
        limit: +pageSize,
      };
      let payload = {
        rows: null,
        calculation: null,
      };
      payload.rows = (await Model.findAll(query)) ?? null;
      payload.calculation = await Model.findAll({
        where: {
          ...(![undefined, null, ''].includes(req.user.id) && {
            userId: { [Op.substring]: req.user.id },
          }),
        },
        attributes: [
          [sequelize.fn('sum', sequelize.col('balance')), 'total'],
          [sequelize.fn('count', sequelize.col('id')), 'count'],
        ],
        raw: true,
      });
      return res
        .status(resCode.HTTP_OK)
        .json(generateResponse(resCode.HTTP_OK, payload));
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res
        .status(resCode.HTTP_INTERNAL_SERVER_ERROR)
        .json(generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, errors));
      throw new Error(e);
    }
  },
  getById: async (req, res) => {
    try {
      let existing = await CustomerRepository.findByPk(req.params.id);
      if (!existing) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Customer');
        return res
          .status(resCode.HTTP_BAD_REQUEST)
          .json(
            generateResponse(
              resCode.HTTP_BAD_REQUEST,
              errors,
              MESSAGES.errorTypes.OAUTH_EXCEPTION
            )
          );
      }
      return res
        .status(resCode.HTTP_OK)
        .json(generateResponse(resCode.HTTP_OK, existing));
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res
        .status(resCode.HTTP_INTERNAL_SERVER_ERROR)
        .json(generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, errors));
      throw new Error(e);
    }
  },
  update: async (req, res) => {
    try {
      let itemDetails = await CustomerRepository.findByPk(req.params.id);
      if (!itemDetails) {
        if (
          ![undefined, null, ''].includes(req.file) &&
          fs.existsSync(req.file.path)
        ) {
          fs.unlinkSync(req.file.path);
        }
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Customer');
        return res
          .status(resCode.HTTP_BAD_REQUEST)
          .json(
            generateResponse(
              resCode.HTTP_BAD_REQUEST,
              errors,
              MESSAGES.errorTypes.OAUTH_EXCEPTION
            )
          );
      } else {
        itemDetails = await generateCreateData(itemDetails, req.body);
        if (![undefined, null, ''].includes(req.file)) {
          if (itemDetails.image) {
            let path = `assets/${itemDetails.image.split('image/')[1]}`;
            if (fs.existsSync(path)) {
              fs.unlinkSync(path);
            }
          }
          itemDetails.image = req.file.filename;
        }
        await CustomerRepository.save(itemDetails)

        return res.json(
          generateResponse(resCode.HTTP_OK, {
            message: MESSAGES.apiSuccessStrings.UPDATE('Customer'),
          })
        );
      }
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res
        .status(resCode.HTTP_INTERNAL_SERVER_ERROR)
        .json(generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, errors));
      throw new Error(e);
    }
  },
  delete: async (req, res) => {
    try {
      let query = {
        where: {
          id: req.params.id,
        },
      };
      let item = await Model.findOne(query);
      let imagePath =
        item && item.image && item.image != 'undefined' ? item.image : null;
      let deletedItem = await Model.destroy(query);
      if (deletedItem) {
        let path = `assets/${imagePath.split('image/')[1]}`;
        if (fs.existsSync(path)) {
          fs.unlinkSync(path);
        }
        return res.json(
          generateResponse(resCode.HTTP_OK, {
            message: MESSAGES.apiSuccessStrings.DELETED('Customer'),
          })
        );
      } else {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Customer');
        return res
          .status(resCode.HTTP_BAD_REQUEST)
          .json(
            generateResponse(
              resCode.HTTP_BAD_REQUEST,
              errors,
              MESSAGES.errorTypes.OAUTH_EXCEPTION
            )
          );
      }
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res
        .status(resCode.HTTP_INTERNAL_SERVER_ERROR)
        .json(generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, errors));
      throw new Error(e);
    }
  },
};

module.exports = modelObj;
