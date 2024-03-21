const sequelize = require('sequelize');
const { Product } = require('../../../../models');
const { ProdAttributeMap } = require('../../../../models');

const fs = require('fs');
const {
  OPTIONS,
  generateResponse,
  generateCreateData,
} = require('../../../../config/options/global.options');
const MESSAGES = require('../../../../config/options/messages.options');
const resCode = MESSAGES.resCode;
const Op = sequelize.Op;
const Model = Product;
const ApiError = require('../../../../config/middlewares/api.error');
const { asyncHandler } = require('../../../../config/middlewares/async.handler');
const cloudinary = require('../../../../shared/service/cloudinary.service');

const modelObj = {
  create: asyncHandler(async (req, res) => {

    let checkExisting = await Model.findOne({
      where: {
        name: req.body.name,
      },
    });
    console.log("files ====", req.files);
    // if (req.files.bannerImage.length) {
    //   req.body.bannerImage = await cloudinary.uploadFromBuffer(req.files.bannerImage[0].buffer)
    // }
    // if (req.files.productImage.length) {

    //   let promissArr = []
    //   for (const item of req.files.productImage) {
    //     promissArr.push(cloudinary.uploadFromBuffer(item.buffer))
    //   }
    //   await Promise.all(promissArr).then((values) => {
    //     console.log(values);
    //   });
    //   for (const item of req.files.productImage) {
    //   }

    // }


    if (checkExisting) {

      let message = MESSAGES.apiErrorStrings.Data_EXISTS('Product');
      throw new ApiError(message, resCode.HTTP_BAD_REQUEST);

    }

    let createObj = await generateCreateData(new Model(), req.body);
    if (![undefined, null, ''].includes(req.file)) {
      createObj.bImage = req.file.filename;
    }
    let product = await createObj.save();
    if (req.body.attributeArr.length) {
      let payloadMap = req.body.attributeArr.map(x => {
        return {
          attributeId: x,
          productId: product.id
        }
      })

      await ProdAttributeMap.bulkCreate([payloadMap]);

    }
    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.ADDED('Product'),
      })
    );
  }),
  getAll: asyncHandler(async (req, res) => {
    const {
      page = 1,
      pageSize = 10,
      column = 'createdAt',
      direction = 'DESC',
      search = null,
    } = req.query;
    let offset = (page - 1) * pageSize || 0;
    let query = {
      where: {
        ...(!!search && {
          [Op.or]: {
            name: { [Op.like]: search },
          },
        }),

      },
      order: [[column, direction]],
      // attributes: {
      //   exclude: ['userId'],
      // },
      // include: {
      //   model: User,
      //   as: 'shop',
      //   attributes: ['id', 'name', 'mobile'],
      // },
      offset: +offset,
      limit: +pageSize,
    };
    console.log('getll all product');
    let response = await Model.findAndCountAll(query);

    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, response));

  }),
  getById: asyncHandler(async (req, res) => {
    let existing = await Model.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!existing) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Product');
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST)
    }
    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, existing));

  }),
  update: asyncHandler(async (req, res) => {

    let itemDetails = await Model.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (req.body.attributeArr.length) {
      let deleteQuery = {
        where: {
          productId: req.params.id,
        },
      }
      await Model.destroy(deleteQuery);

      let payloadMap = req.body.attributeArr.map(x => {
        return {
          attributeId: x,
          productId: req.params.id
        }
      })
      await ProdAttributeMap.bulkCreate([payloadMap]);
    }

    if (!itemDetails) {

      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Product');
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST)

    } else {
      itemDetails = await generateCreateData(itemDetails, req.body);
      // if (![undefined, null, ''].includes(req.file)) {
      //   if (itemDetails.image) {

      //   }
      //   itemDetails.image = req.file.filename;
      // }
      await itemDetails.save();
      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.UPDATE('Product'),
        })
      );
    }

  }),
  delete: asyncHandler(async (req, res) => {
    let query = {
      where: {
        id: req.params.id,
      },
    };
    let item = await Model.findOne(query);
    if (item && item?.bannerImage) {
      await cloudinary.deleteFile(item.bannerImage);
    }

    let deletedItem = await Model.destroy(query);
    if (deletedItem) {
      let deleteQuery = {
        where: {
          productId: req.params.id,
        },
      }
      await ProdAttributeMap.destroy(deleteQuery);

      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.DELETED('Product'),
        })
      );
    } else {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Product');
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST)

    }

  }),
};

module.exports = modelObj;
