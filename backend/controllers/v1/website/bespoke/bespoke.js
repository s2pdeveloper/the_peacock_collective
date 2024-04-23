const sequelize = require("sequelize");
const BespokeRepository = require("../../../../models/repository/bespokeRepository");
const Customer = require("../../../../models").Custopmer;
const {
  OPTIONS,
  generateResponse,
} = require("../../../../config/options/global.options");
const MESSAGES = require("../../../../config/options/messages.options");
const resCode = MESSAGES.resCode;

const ApiError = require("../../../../config/middlewares/api.error");
const {
  asyncHandler,
} = require("../../../../config/middlewares/async.handler");
const cloudinary = require("../../../../shared/service/cloudinary.service");

const modelObj = {
  create: asyncHandler(async (req, res) => {
    // const isExisting = await BespokeRepository.findOneByCondition({
    //   where: { customerId: req.user.id },
    // });
    req.body.customerId = req.user.id;
    createObj = await BespokeRepository.create(req.body);
    if(req.files){
      let imageArr=[];
      for (const item of req.files) {
        let img = await cloudinary.uploadFromBuffer(item.buffer);
        imageArr.push(img);
      }
      if(imageArr.length){
        let bespokeMap=imageArr.map(x=>{
          return{
            image:x,
            bespokeId:createObj.id
          }
        })
       await BespokeRepository.bulkCreate(bespokeMap);
      }
    }
    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.ADDED("Bespoke"),
      })
    );
  }),

  getAll: asyncHandler(async (req, res) => {
    const {
      page = 1,
      pageSize = 10,
      column = "createdAt",
      direction = "DESC",
    } = req.query;
    let offset = (page - 1) * pageSize || 0;
    let query = {
      where: { customerId: req.user.id },
      include : [{
        model : Customer,
        as: "customerWithBespoke",
          attributes: ["firstName", "lastName"],
      }],
      order: [[column, direction]],
      offset: +offset,
      limit: +pageSize,
    };

    let response = await BespokeRepository.findAndCountAll(query);
    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, response));
  }),

  getById: asyncHandler(async (req, res) => {
    let query = {
      where: {
        id: req.params.id,
      },
    };
    let existing = await BespokeRepository.findOneByCondition(query);
    if (!existing) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Bespoke");
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

    // let itemDetails=await BespokeRepository.findOneByCondition(query);
    req.body.customerId = req.user.id;
    let itemDetails = await BespokeRepository.update(req.body, query);
    if (itemDetails[0] == 0) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Bespoke");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
    // itemDetails = await generateCreateData(itemDetails, req.body);
    // await itemDetails.save();
    return res.json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.UPDATE("Bespoke"),
      })
    );
  }),

  delete: asyncHandler(async (req, res) => {
    let query = {
      where: {
        id: req.params.id,
      },
    };
    // let item = await Model.findOne(query);
    // let item = await BespokeRepository.delete(query);
    let deletedItem = await Model.destroy(query);
    if (deletedItem) {
      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.DELETED("Bespoke"),
        })
      );
    } else {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Bespoke");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
  }),
};

module.exports = modelObj;
