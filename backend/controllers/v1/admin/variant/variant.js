const Sequelize = require("sequelize");
const {
  Variant,
  AttrVariantMap,
  Attribute,
  Product,
  sequelize,
} = require("../../../../models");
const {
  OPTIONS,
  generateResponse,
  generateCreateData,
} = require("../../../../config/options/global.options");
const MESSAGES = require("../../../../config/options/messages.options");
const resCode = MESSAGES.resCode;
const Op = Sequelize.Op;
const Model = Variant;
const ApiError = require("../../../../config/middlewares/api.error");
const {
  asyncHandler,
} = require("../../../../config/middlewares/async.handler");
const {
  generateCsv,
} = require("../../../../shared/repositories/generate-excel.repository");

const modelObj = {
  create: asyncHandler(async (req, res) => {
    let checkExisting = await Model.findOne({
      where: {
        sku: req.body.sku,
      },
    });
    console.log("request in variant",req.body);
    if (checkExisting) {
      let message = MESSAGES.apiErrorStrings.Data_EXISTS("Variant");
      throw new ApiError(message, resCode.HTTP_BAD_REQUEST);
    }

    let createObj = await generateCreateData(new Model(), req.body);
    let variant = await createObj.save();
    console.log("your variant in after created",variant)

    if (req.body?.attributeArr && req.body?.attributeArr.length) {
      let payloadMap = req.body.attributeArr.map((x) => {
        return {
          attributeId: x.attrId,
          value: x.value,
          variantId: variant.id,
        };
      });
      await AttrVariantMap.bulkCreate(payloadMap);
    }

    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.ADDED("Variant"),
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
            name: { [Op.like]: search },
          },
        }),
      },
      include: {
        model: AttrVariantMap,
        as: "variantWithAttrVariantMap",
        // attributes: ['id', 'title', 'course_id', 'start_date', 'end_date']
      },
      order: [[column, direction]],
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
      include: {
        model: AttrVariantMap,
      },
    });
    if (!existing) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Variant");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, existing));
  }),
  getByProductId: asyncHandler(async (req, res) => {
    let existing = await Model.findAll({
      where: {
        productId: req.params.id,
      },
      include: {
        model: AttrVariantMap,
        as: "variantWithAttrVariantMap",
        // paranoid: true, required: false,
        include: {
          model: Attribute,
          as: "AttrVariantMapWithAttributes",
        },
      },
    });
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

    if (!itemDetails) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Variant");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    } else {
      if (req.body?.attributeArr && req.body?.attributeArr.length) {
        let deleteQuery = {
          where: {
            productId: req.params.id,
          },
        };
        await AttrVariantMap.destroy(deleteQuery);

        let payloadMap = req.body.attributeArr.map((x) => {
          return {
            attributeId: x.attrId,
            value: x.value,
            variantId: variant.id,
          };
        });
        await AttrVariantMap.bulkCreate(payloadMap);
      }
      itemDetails = await generateCreateData(itemDetails, req.body);
      await itemDetails.save();
      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.UPDATE("Variant"),
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
    let deletedItem = await Model.destroy(query);
    if (deletedItem) {
      let deleteQuery = {
        where: {
          variantId: req.params.id,
        },
      };
      await AttrVariantMap.destroy(deleteQuery);
      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.DELETED("Variant"),
        })
      );
    } else {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Variant");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
  }),
  getAllProductVariant: asyncHandler(async (req, res) => {
    const {
      page = 1,
      pageSize = 10,
      column = "createdAt",
      direction = "DESC",
      search = null,
    } = req.query;
    let offset = (page - 1) * pageSize || 0;
    let query = {
      // where: {
      //   ...(search && {
      //     [Op.or]: {
      //       name: { [Op.like]: search },
      //     },
      //   }),
      // },
      distinct: true,
      include: [
        {
          model: AttrVariantMap,
          as: "variantWithAttrVariantMap",
          include: {
            model: Attribute,
            as: "AttrVariantMapWithAttributes",
          },
        },
        {
          model: Product,
          as: "variantWithProduct",
        },
      ],
      attributes : {
        include: [
          "id",
          "price",
          "productId",
          "qty",
          "sku",
          [sequelize.literal("0"), "addQty"],
        ],
      },
      order: [[column, direction]],
      offset: +offset,
      limit: +pageSize,
    };
    let response = await Model.findAndCountAll(query);
    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, response));
  }),
  download: asyncHandler(async (req, res) => {
    const {
      page = 1,
      pageSize = 10,
      column = "createdAt",
      direction = "DESC",
      search = null,
    } = req.query;
    let offset = (page - 1) * pageSize || 0;
    let query = {
      // where: {
      //   ...(search && {
      //     [Op.or]: {
      //       name: { [Op.like]: search },
      //     },
      //   }),
      // },
      distinct: true,
      include: [
        {
          model: AttrVariantMap,
          as: "variantWithAttrVariantMap",
          include: {
            model: Attribute,
            as: "AttrVariantMapWithAttributes",
          },
        },
        {
          model: Product,
          as: "variantWithProduct",
        },
      ],
      order: [[column, direction]],
      // offset: +offset,
      // limit: +pageSize,
    };
    let response = await Model.findAndCountAll(query);

    //  columns = [
    //     { header: 'Id', key: 'id', width: 10 },
    //     { header: 'Name', key: 'name', width: 32 },
    //     { header: 'D.O.B.', key: 'DOB', width: 10 }
    // ];
    // generateCsv()
    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, response));
  }),
  updateAll: asyncHandler(async (req, res) => {
    let promissArr = req.body.map((x) => {
      return Model.update(
        { qty: x.qty, price: x.price },
        {
          where: {
            id: x.id,
          },
        }
      );
    });
    Promise.allSettled(promissArr).then((values) => {
      console.log(values);
      for (const result of values) {
        if (result.status == "rejected") {
          throw new ApiError(
            "error in update variant",
            resCode.HTTP_BAD_REQUEST
          );
        }
      }
      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.UPDATE("Variant"),
        })
      );
    });
  }),
};

module.exports = modelObj;
