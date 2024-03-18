const sequelize = require('sequelize');
const { Passbook, Customer } = require('../../../../models');
const Model = Passbook;
const fs = require('fs');
const {
  OPTIONS,
  generateResponse,
  generateCreateData,
} = require('../../../../config/options/global.options');
const MESSAGES = require('../../../../config/options/messages.options');
const resCode = MESSAGES.resCode;
const Op = sequelize.Op;

const modelObj = {
  create: async (req, res) => {
    try {
      let createObj = await generateCreateData(new Model(), req.body);
      let customerDetails = await Customer.findOne({
        where: {
          id: createObj.customerId,
        },
      });
      if (createObj.type == OPTIONS.paymentType.ADVANCE) {
        let total = +createObj.amount - +createObj.paid;
        customerDetails.balance = +customerDetails.balance + total;
      }
      if (createObj.type == OPTIONS.paymentType.DEPOSIT) {
        customerDetails.balance = +customerDetails.balance - +createObj.paid;
      }
      createObj.currentBalance = +customerDetails.balance;
      await createObj.save();
      await customerDetails.save();
      return res.status(resCode.HTTP_OK).json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.ADDED(`Passbook`),
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
        search = null,
        column = 'createdAt',
        direction = 'DESC',
        customerId = null,
        startDate = null,
        endDate = null,
        type = null,
      } = req.query;
      let offset = (page - 1) * pageSize || 0;
      let query = {
        where: {
          ...(![undefined, null, ''].includes(customerId) && {
            customerId: { [Op.substring]: customerId },
          }),
          ...(![undefined, null, ''].includes(startDate) && {
            createdAt: { [Op.gte]: startDate },
          }),
          ...(![undefined, null, ''].includes(endDate) && {
            createdAt: { [Op.lte]: endDate },
          }),
          ...(![undefined, null, ''].includes(type) && {
            type: type,
          }),
          ...(![undefined, null, ''].includes(search) && {
            particular: { [Op.substring]: req.query.search },
          }),
        },
        order: [[column, direction]],
        attributes: {
          exclude: ['customerId'],
        },
        // include: {
        //   model: Customer,
        //   as: 'customer',
        //   attributes: ['id', 'name', 'mobile'],
        // },
        offset: +offset,
        limit: +pageSize,
      };
      let response = await Model.findAndCountAll(query);
      response.customerDetails = await Customer.findOne({
        where: {
          id: customerId,
        },
      });

      if (!response.rows) {
        return res.status(resCode.HTTP_BAD_REQUEST).json(
          generateResponse(resCode.HTTP_BAD_REQUEST, {
            message: MESSAGES.apiSuccessStrings.EMPTY('Passbook'),
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

  getById: async (req, res) => {
    try {
      let existing = await Model.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!existing) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Passbook');
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
      let itemDetails = await Model.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!itemDetails) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Passbook');
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
        await itemDetails.save();
        return res.json(
          generateResponse(resCode.HTTP_OK, {
            message: MESSAGES.apiSuccessStrings.UPDATE('Passbook'),
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
      let deletedItem = await Model.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (deletedItem) {
        return res.json(
          generateResponse(resCode.HTTP_OK, {
            message: MESSAGES.apiSuccessStrings.DELETED('Passbook'),
          })
        );
      } else {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Passbook');
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
