const sequelize = require("sequelize");
const studentNotification = require("../../../../models").StudentNotification;
const notificationDetails = require("../../../../models").Notification;

const {
  OPTIONS,
  generateCreateData,
  generateResponse,
} = require("../../../../config/options/global.options");
const MESSAGES = require("../../../../config/options/messages.options");
const resCode = MESSAGES.resCode;
const Op = sequelize.Op;

const notificationObj = {
  getAllStudentNotifications: async (req, res) => {
    try {
      let offset = ((req.query.page || 1) - 1) * req.query.pageSize || 0;
      let limit = req.query.pageSize || 10;
      let whereQuery = {
        [Op.and]: [{ userId: req.user.id }],
      };
      if (req.query.search) {
        whereQuery = {
          [Op.or]: [{ message: { [Op.substring]: req.query.search } }],
        };
      }
      let { count, rows } = await studentNotification.findAndCountAll({
        where: whereQuery,
        order: [["createdAt", "DESC"]],
        attributes: {
          exclude: ["updatedAt"],
        },
        offset: parseInt(offset),
        limit: parseInt(limit),
      });
      if (!rows) {
        return res.status(resCode.HTTP_BAD_REQUEST).json(
          generateResponse(resCode.HTTP_BAD_REQUEST, {
            message: MESSAGES.apiSuccessStrings.NOTIFICATION("empty"),
          })
        );
      }
      let payload = {
        count: count,
        notificationDetails: rows,
      };
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
  getAllNotifications: async (req, res) => {
    try {
      let offset = ((req.query.page || 1) - 1) * req.query.pageSize || 0;
      let limit = req.query.pageSize || 10;
      let whereQuery = {};
      if (req.query.search) {
        whereQuery = {
          [Op.or]: [{ message: { [Op.substring]: req.query.search } }],
        };
      }
      let { count, rows } = await notificationDetails.findAndCountAll({
        where: whereQuery,
        order: [["createdAt", "DESC"]],
        attributes: {
          exclude: ["updatedAt"],
        },
        offset: parseInt(offset),
        limit: parseInt(limit),
      });
      if (!rows) {
        return res.status(resCode.HTTP_BAD_REQUEST).json(
          generateResponse(resCode.HTTP_BAD_REQUEST, {
            message: MESSAGES.apiSuccessStrings.NOTIFICATION("empty"),
          })
        );
      }
      let payload = {
        count: count,
        notificationDetails: rows,
      };

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
};

module.exports = notificationObj;
