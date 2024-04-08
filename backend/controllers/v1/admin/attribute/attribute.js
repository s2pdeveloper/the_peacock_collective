const sequelize = require("sequelize");
const AttributeRepository=require("../../.../../../../models/repository/adminRepo/attributeRepository")
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


const modelObj = {
  create: asyncHandler(async (req, res) => {
    let query={
      where: {
        name: req.body.name,
      }
    }
    
    let checkExisting=await AttributeRepository.findOneByCondition(query);
    if (checkExisting) {
      let message = MESSAGES.apiErrorStrings.Data_EXISTS("Attribute");
      throw new ApiError(message, resCode.HTTP_BAD_REQUEST);
    }

    await AttributeRepository.create(req.body);
    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.ADDED("Attribute"),
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
      order: [[column, direction]],
      offset: +offset,
      limit: +pageSize,
    };
  
    let response =await AttributeRepository.findAndCountAll(query);
    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, response));
  }),

  getById: asyncHandler(async (req, res) => {
   
    
   let query={
    where: {
      id: req.params.id,
    },
  } 
  let existing=await AttributeRepository.findOneByCondition(query);

    if (!existing) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Attribute");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, existing));
  }),


  update: asyncHandler(async (req, res) => {
  

    let query={
      where: {
        id: req.params.id,
      },
    }

    let itemDetails=await AttributeRepository.update(req.body,query);
    if (itemDetails[0]==0) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Attribute");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    } else {
     
      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.UPDATE("Attribute"),
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
    let deletedItem=await AttributeRepository.delete(query);
    if (deletedItem!==0) {
      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.DELETED("Attribute"),
        })
      );
    } else {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Attribute");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
  }),
};

module.exports = modelObj;
