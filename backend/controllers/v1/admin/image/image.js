const sequelize = require('sequelize');
const fs = require('fs');
const Model = require('../../../../models').Images;
const {
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
      if (![undefined, null, ''].includes(req.file)) {
        createObj.image = req.file.filename;
      }
      await createObj.save();
      return res.status(resCode.HTTP_OK).json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.ADDED(`The Image is`),
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
        flag = null,
      } = req.query;
      let offset = (page - 1) * pageSize || 0;
      let query = {
        where: {
          ...(![undefined, null, ''].includes(flag) && {
            type: { [Op.substring]: flag },
          }),
          ...(![undefined, null, ''].includes(search) && {
            name: { [Op.substring]: req.query.search },
          }),
        },
        order: [[column, direction]],
        offset: +offset,
        limit: +pageSize,
      };
      let response = await Model.findAndCountAll(query);
      if (!response.rows) {
        return res.status(resCode.HTTP_BAD_REQUEST).json(
          generateResponse(resCode.HTTP_BAD_REQUEST, {
            message: MESSAGES.apiSuccessStrings.IMAGES('empty'),
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
      let existingImage = await Model.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!existingImage) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('The Image');
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
        .json(generateResponse(resCode.HTTP_OK, existingImage));
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
        if (
          ![undefined, null, ''].includes(req.file) &&
          fs.existsSync(req.file.path)
        ) {
          fs.unlinkSync(req.file.path);
        }
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('The Image');
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
        itemDetails.updatedAt = new Date();
        await itemDetails.save();
        return res.json(
          generateResponse(resCode.HTTP_OK, {
            message: MESSAGES.apiSuccessStrings.UPDATE('The Image'),
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
            message: MESSAGES.apiSuccessStrings.DELETED('The image'),
          })
        );
      } else {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('The image');
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
