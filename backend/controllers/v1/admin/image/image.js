const sequelize = require("sequelize");
const fs = require("fs");
const Model = require("../../../../models").Images;
const {
  generateResponse,
  generateCreateData,
} = require("../../../../config/options/global.options");
const MESSAGES = require("../../../../config/options/messages.options");
const resCode = MESSAGES.resCode;
const Op = sequelize.Op;

const {
  asyncHandler,
} = require("../../../../config/middlewares/async.handler");

const imagesRepository = require("../../../../models/repository/adminRepo/imageRepository");

const modelObj = {
  create: asyncHandler(async (req, res) => {
    // let createObj = await generateCreateData(new Model(), req.body);
    let createObj = await imagesRepository.create(req.body);
    if (![undefined, null, ""].includes(req.file)) {
      createObj.image = req.file.filename;
    }
    // await createObj.save();
    await imagesRepository.save(createObj);
    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.ADDED(`Image`),
      })
    );
  }),

  getAll: asyncHandler(async (req, res) => {
    const {
      page = 1,
      pageSize = 10,
      search = null,
      column = "createdAt",
      direction = "DESC",
      flag = null,
    } = req.query;
    let offset = (page - 1) * pageSize || 0;
    let query = {
      where: {
        ...(![undefined, null, ""].includes(flag) && {
          type: { [Op.substring]: flag },
        }),
        ...(![undefined, null, ""].includes(search) && {
          name: { [Op.substring]: req.query.search },
        }),
      },
      order: [[column, direction]],
      offset: +offset,
      limit: +pageSize,
    };
    // let response = await Model.findAndCountAll(query);
    let response = await imagesRepository.findAndCountAll(query);
    if (!response.rows) {
      return res.status(resCode.HTTP_BAD_REQUEST).json(
        generateResponse(resCode.HTTP_BAD_REQUEST, {
          message: MESSAGES.apiSuccessStrings.IMAGES("empty"),
        })
      );
    }
    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, response));
  }),

  getById: asyncHandler(async (req, res) => {
    // let existingImage = await Model.findOne({
    //   where: {
    //     id: req.params.id,
    //   },
    // });

    let query = {
      where: {
        id: req.params.id,
      },
    };

    let existingImage = await imagesRepository.findOneByCondition(query);

    if (!existingImage) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("The Image");
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
  }),

  update: asyncHandler(async (req, res) => {
    // let itemDetails = await Model.findOne({
    //   where: {
    //     id: req.params.id,
    //   },
    // });

    let query = {
      where: {
        id: req.params.id,
      },
    };

    let itemDetails = await imagesRepository.findOneByCondition(query);
    if (!itemDetails) {
      if (
        ![undefined, null, ""].includes(req.file) &&
        fs.existsSync(req.file.path)
      ) {
        fs.unlinkSync(req.file.path);
      }
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("The Image");
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
      // itemDetails = await generateCreateData(itemDetails, req.body);

      itemDetails = await imagesRepository.update(data, query);
      if (![undefined, null, ""].includes(req.file)) {
        if (itemDetails.image) {
          let path = `assets/${itemDetails.image.split("image/")[1]}`;
          if (fs.existsSync(path)) {
            fs.unlinkSync(path);
          }
        }
        itemDetails.image = req.file.filename;
      }
      itemDetails.updatedAt = new Date();
      await imagesRepository.save(itemDetails);
      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.UPDATE("The Image"),
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
    let imagePath =
      item && item.image && item.image != "undefined" ? item.image : null;
    let deletedItem = await Model.destroy(query);
    if (deletedItem) {
      let path = `assets/${imagePath.split("image/")[1]}`;
      if (fs.existsSync(path)) {
        fs.unlinkSync(path);
      }
      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.DELETED("The image"),
        })
      );
    } else {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("The image");
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
  }),
};
module.exports = modelObj;
