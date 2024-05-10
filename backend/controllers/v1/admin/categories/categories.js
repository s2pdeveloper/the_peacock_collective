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
const cloudinary = require("../../../../shared/service/cloudinary.service");
const categoryRepository = require("../../../../models/repository/categoryRepository");

const modelObj = {
  create: asyncHandler(async (req, res) => {
    // let checkExisting = await Model.findOne({
    //   where: {
    //     name: req.body.name,
    //     ...(req.body.parentId && { parentId: req.body.parentId }),
    //   },
    // });
    console.log("req.body......................", req.body);
    let query = {
      where: {
        name: req.body.name,
        // ...(req.body.parentId && { parentId: req.body.parentId }),
      },
    };

    let checkExisting = await categoryRepository.findOneByCondition(query);
    console.log("checkExisting", checkExisting);
    if (checkExisting) {
      let message = MESSAGES.apiErrorStrings.Data_EXISTS("Categories");
      throw new ApiError(message, resCode.HTTP_BAD_REQUEST);
    }
    if (req.file) {
      req.body.image = await cloudinary.uploadFromBuffer(req.file.buffer);
    }

    // let createObj = await generateCreateData(new Model(), req.body);
    // await createObj.save();
    console.log("req.body", req.body);

    await categoryRepository.create(req.body);
    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.ADDED("Categories"),
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
      category = false,
      parentId = null,
    } = req.query;
    let offset = (page - 1) * pageSize || 0;
    let query = {
      where: {
        ...(![undefined, null, ""].includes(search) && {
          [Op.or]: {
            name: { [Op.like]: search },
            description: { [Op.like]: search },
          },
        }),
        // ...(!category && {
        //   parentId: {
        //     [Op.ne]: null
        //   }
        // }),
        // ...(category && {
        //   parentId: {
        //     [Op.eq]: null
        //   }
        // }),
        // ...(parentId && {
        //   parentId: parentId
        // })
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
      ...(req.query.page &&
        req.query.pageSize && {
        offset: +offset,
        limit: +pageSize,
      }),
    };
    // let response = await Model.findAndCountAll(query);

    let response = await categoryRepository.findAndCountAll(query);

    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, response));
  }),
  getById: asyncHandler(async (req, res) => {
    // let existing = await Model.findOne({
    //   where: {
    //     id: req.params.id,
    //   },
    // });

    let query = {
      where: {
        id: req.params.id,
      },
    };

    let existing = await categoryRepository.findOneByCondition(query);
    if (!existing) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Categories");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, existing));
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

    let itemDetails = await categoryRepository.findOneByCondition(query);

    // console.log("itemDetails============", itemDetails);
    if (!itemDetails) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Categories");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    } else {
      if (req.file) {
        if (itemDetails.image) {
          await cloudinary.deleteFile(itemDetails.image);
        }

        req.body.image = await cloudinary.uploadFromBuffer(req.file.buffer);
      }

      // let itemDetails = await generateCreateData(itemDetails, req.body);
      // await itemDetails.save();

      let itemDetails = await categoryRepository.update(req.body, query);

      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.UPDATE("Categories"),
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
    let item = await categoryRepository.findOneByCondition(query);
    if (item && item?.image) {
      await cloudinary.deleteFile(item.image);
    }

    let deletedItem = await categoryRepository.delete(query);
    if (deletedItem) {
      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.DELETED("Categories"),
        })
      );
    } else {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Categories");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
  }),
};

module.exports = modelObj;
