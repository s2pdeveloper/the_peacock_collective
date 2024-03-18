const sequelize = require('sequelize');
const { Subscription } = require('../../../../models');
const Model = Subscription;
const notification = require('../../../../shared/repositories/notification.repository');
const { getStudentDevice } = require('../../../../config/middlewares/utils');
const {
  OPTIONS,
  generateResponse,
  generateCreateData,
} = require('../../../../config/options/global.options');
const db = require('../../../../models');
const MESSAGES = require('../../../../config/options/messages.options');
const resCode = MESSAGES.resCode;
const Op = sequelize.Op;

const subscriptionObj = {
  create: async (req, res) => {
    try {
      let checkExisting = await Model.findOne({
        where: {
          planType: req.body.planType,
        },
      });
      if (checkExisting) {
        let errors = MESSAGES.apiErrorStrings.Data_EXISTS('Subscription');
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
      let createObj = await generateCreateData(new Model(), req.body);
      createObj.totalAmount =
        +req.body.subscriptionCharges -
        (+req.body.subscriptionCharges * +req.body.discountPercentage) / 100;
      await createObj.save();
      //   let studentDevices = await getStudentDevice(req.body.educationType, null);
      //   for (let i = studentDevices.rows.length - 1; i >= 0; i--) {
      //       let data = studentDevices.rows[i];
      //       await studentNotification.create({
      //           studentId: data.id,
      //           title: MESSAGES.pushNotification.SUBSCRIPTION_ALERT,
      //           message: MESSAGES.pushNotification.SUBSCRIPTION_ALERT_MSG(data.name),
      //       });
      //       let notificationObj = {
      //           heading: MESSAGES.pushNotification.SUBSCRIPTION_ALERT,
      //           description: MESSAGES.pushNotification.SUBSCRIPTION_ALERT_MSG(data.name),
      //           type: "Subscription Plan",
      //       };

      //       if (data && data.userDeviceDetails && data.userDeviceDetails.deviceId) {
      //           notification([{deviceId: data.userDeviceDetails.deviceId}], notificationObj);
      //       }
      //   }
      return res.status(resCode.HTTP_OK).json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.ADDED(`The Subscription  is`),
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
      let response = await Model.findAndCountAll();
      if (!response.rows) {
        return res.status(resCode.HTTP_BAD_REQUEST).json(
          generateResponse(resCode.HTTP_BAD_REQUEST, {
            message: MESSAGES.apiSuccessStrings.EMPTY('Subscription'),
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
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Subscription');
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
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Subscription');
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
        itemDetails.totalAmount &&
          (itemDetails.totalAmount =
            +req.body.subscriptionCharges -
            (+req.body.subscriptionCharges * +req.body.discountPercentage) /
            100);
        console.log('itemDetails', itemDetails);
        await itemDetails.save();
        return res.json(
          generateResponse(resCode.HTTP_OK, {
            message: MESSAGES.apiSuccessStrings.UPDATE('Subscription'),
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
            message: MESSAGES.apiSuccessStrings.DELETED('Subscription'),
          })
        );
      } else {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Subscription');
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
module.exports = subscriptionObj;
