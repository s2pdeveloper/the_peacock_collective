const Sequelize = require('sequelize');
const { Product, ProdAttributeMap, Attribute, Categories, ProdTagMap } = require("../../../../models");
const {
  OPTIONS,
  generateResponse,
  generateCreateData,
} = require("../../../../config/options/global.options");
const MESSAGES = require("../../../../config/options/messages.options");
const resCode = MESSAGES.resCode;
const Op = Sequelize.Op;

const Model = Product;
const ApiError = require("../../../../config/middlewares/api.error");
const {
  asyncHandler,
} = require("../../../../config/middlewares/async.handler");
const cloudinary = require("../../../../shared/service/cloudinary.service");

const modelObj = {
  create: asyncHandler(async (req, res) => {
    let checkExisting = await Model.findOne({
      where: {
        name: req.body.name,
      },
    });
    if (checkExisting) {
      let message = MESSAGES.apiErrorStrings.Data_EXISTS("Product");
      throw new ApiError(message, resCode.HTTP_BAD_REQUEST);
    }
    if (req.file) {
      req.body.bannerImage = await cloudinary.uploadFromBuffer(req.file.buffer);
    }
    let createObj = await generateCreateData(new Model(), req.body);

    let product = await createObj.save();
    if (req.body?.attributeArr) {
      req.body.attributeArr = JSON.parse(req.body.attributeArr);
      if (req.body.attributeArr.length) {
        let payloadMap = req.body.attributeArr.map(x => {
          return {
            attributeId: x.id,
            productId: product.id
          }
        })

        await ProdAttributeMap.bulkCreate(payloadMap);

      }
    }
    if (req?.body?.tagId) {
      req.body.tagId = JSON.parse(req.body.tagId);
      if (req.body.tagId.length) {
        let tagArr = req.body.tagId.map(x => {
          return {
            tagId: x,
            productId: product.id
          }
        })
        await ProdTagMap.bulkCreate(tagArr)
      }


    }

    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.ADDED("Product"),
      })
    );
  }),
  getAll: asyncHandler(async (req, res) => {
    const {
      page = 1,
      pageSize = 10,
      column = "createdAt",
      direction = "DESC",
      search = null,
    } = req.query;
    let offset = (page - 1) * pageSize || 0;
    let query = {
      where: {
        ...(search && {
          [Op.or]: {
            name: { [Op.like]: `%${search}%` },
            description: { [Op.like]: `%${search}%` },
            // description: { [Op.iLike]: `%${search}%` },
          },
        }),
      },
      order: [[column, direction]],
      // attributes: {
      //   exclude: ['userId'],
      // },
      include: {
        model: ProdAttributeMap,
        as: 'productWithProdAttributeMap',
        paranoid: true, required: false,
        // attributes: ['id', 'name', 'mobile'],
      },
      include: {
        model: Categories,
        as: 'productWithCategory',
        // attributes: ['id', 'name', 'mobile'],
      },
      offset: +offset,
      limit: +pageSize,
    };
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
      include: [{
        model: ProdAttributeMap,
        as: 'productWithProdAttributeMap',
        // attributes: ['id', 'title', 'course_id', 'start_date', 'end_date']
        paranoid: true, required: false,

        include: {
          model: Attribute,
          as: 'ProdAttributeMapWithAttributes',
          // attributes: ['id', 'title', 'course_id', 'start_date', 'end_date']
          // paranoid: true, required: false
        },
      },
      {
        model: Categories,
        as: 'productWithCategory',
        // attributes: ['id', 'title', 'course_id', 'start_date', 'end_date']
        // paranoid: true, required: false

      },
      {
        model: ProdTagMap,
        as: 'productWithTagMap',
        // attributes: ['id', 'title', 'course_id', 'start_date', 'end_date']
        // paranoid: true, required: false

      }
      ]
    });
    if (!existing) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Product");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
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
    req.body.tagId = JSON.parse(req.body?.tagId);

    if (req.body?.attributeArr) {
      req.body.attributeArr = JSON.parse(req.body.attributeArr);

      let deleteQuery = {
        where: {
          productId: req.params.id,
        },
      }
      await ProdAttributeMap.destroy(deleteQuery);

      let payloadMap = req.body.attributeArr.map(x => {
        return {
          attributeId: x.id,
          productId: req.params.id
        }
      })
      await ProdAttributeMap.bulkCreate(payloadMap);


    }

    let deleteQuery = {
      where: {
        productId: req.params.id,
      },
    }
    await ProdTagMap.destroy(deleteQuery);
    let tagArr = req.body.tagId.map(x => {
      return {
        tagId: x,
        productId: req.params.id
      }
    })
    await ProdTagMap.bulkCreate(tagArr)


    if (!itemDetails) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Product");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    } else {

      if (req.file) {
        if (itemDetails?.bannerImage) {
          await cloudinary.deleteFile(itemDetails.bannerImage);
        }
        req.body.bannerImage = await cloudinary.uploadFromBuffer(req.file.buffer);
      }

      itemDetails = await generateCreateData(itemDetails, req.body);
      await itemDetails.save();
      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.UPDATE("Product"),
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
          message: MESSAGES.apiSuccessStrings.DELETED("Product"),
        })
      );
    } else {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Product");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
  }),
  getProductAttribute: asyncHandler(async (req, res) => {
    let existing = await ProdAttributeMap.findAll({
      where: {
        productId: req.params.id,
      },
      //   include:[ {
      //     model: ProdAttributeMap,
      //     as: 'productWithProdAttributeMap',
      //     // attributes: ['id', 'title', 'course_id', 'start_date', 'end_date']
      //     paranoid: true, required: false,

      // }
      // ]
    });
    if (!existing) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Product");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, existing));
  }),


};

module.exports = modelObj;
