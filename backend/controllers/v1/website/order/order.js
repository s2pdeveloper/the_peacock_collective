const sequelize = require('sequelize');
const { Order,Cart ,Variant,OrderVariantMap} = require('../../../../models');
const fs = require('fs');
const {
  OPTIONS,
  generateResponse,
  generateCreateData,
} = require('../../../../config/options/global.options');
const MESSAGES = require('../../../../config/options/messages.options');
const resCode = MESSAGES.resCode;
const Op = sequelize.Op;
const Model = Order;
const ApiError = require('../../../../config/middlewares/api.error');
const { asyncHandler } = require('../../../../config/middlewares/async.handler');
const cloudinary = require('../../../../shared/service/cloudinary.service');

const modelObj = {
  create: asyncHandler(async (req, res) => {

    let newOrder = await generateCreateData(new Model(), req.body); 
    await newOrder.save();
    
    const {
      page = 1,
      pageSize = 10,
      column = 'createdAt',
      direction = 'DESC',
      search = null,
      catagory = false
    } = req.query;
    let offset = (page - 1) * pageSize || 0;
    let query = {
      where: {    
           userId:req.body.userId  
      },
      order: [[column, direction]],
      include: {
        model: Variant,
        as: 'cartWithVariants',
        // paranoid: true, required: false,
         attributes: ['price','qty'],
      },
      offset: +offset,
      limit: +pageSize,
    };
    // console.log("your query in the query",query);
    let response = await Cart.findAndCountAll(query);
//  console.log("you al cart",response);

    response.rows.map(async(cart)=>{
      console.log("your data",cart.dataValues.cartWithVariants.dataValues)
      const newVariantMapOrder=await generateCreateData(new OrderVariantMap(),{
        variantId:cart.dataValues.variantId,
        orderId:newOrder.id,
        price:cart.dataValues.cartWithVariants.dataValues.price,
        qty:cart.dataValues.qty
      })
      newVariantMapOrder.save();
    })

 console.log("your all cart by this user",response);
    // await createObj.save();
    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.ADDED('Address'),
        response
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
      catagory = false
    } = req.query;
    let offset = (page - 1) * pageSize || 0;
    let query = {
      where: {
        ...(![undefined, null,''].includes(search) && {
          [Op.or]: {
            name: { [Op.like]: search },
            description: { [Op.like]: search },
          },
        }),
        ...(catagory && {
          parentId: {
            [Op.ne]: null
          }
        })

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
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Categories');
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

    // console.log("itemDetails============", itemDetails);
    if (!itemDetails) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Categories');
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST)

    } else {
      if (req.file) {
        if (itemDetails.image) {
          await cloudinary.deleteFile(itemDetails.image);
        }
        console.log("req.file.path", req.file);
        req.body.image = await cloudinary.uploadFromBuffer(req.file.buffer);
      }

      itemDetails = await generateCreateData(itemDetails, req.body);

      await itemDetails.save();

      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.UPDATE('Categories'),
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
    if (item && item?.image) {
      await cloudinary.deleteFile(item.image);
    }

    let deletedItem = await Model.destroy(query);
    console.log("deletedItemdeletedItem", deletedItem);
    if (deletedItem) {
      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.DELETED('Categories'),
        })
      );
    } else {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Categories');
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST)

    }

  }),
};

module.exports = modelObj;
