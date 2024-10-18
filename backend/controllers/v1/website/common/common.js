const Sequelize = require("sequelize");

const Product = require("../../../../models").Product;
const Attribute = require("../../../../models").Attribute;
const Categories = require("../../../../models").Categories;
const Images = require("../../../../models").Images;
const Tag = require("../../../../models").Tag;
const AttrVariantMap = require("../../../../models").AttrVariantMap;
const ProdTagMap = require("../../../../models").ProdTagMap;
const Variant = require("../../../../models").Variant;
const Cart = require("../../../../models").Cart;
const CategoryTagMap = require("../../../../models").CategoryTagMap;
const {
  OPTIONS,
  generateResponse,
  generateCreateData,
} = require("../../../../config/options/global.options");
const MESSAGES = require("../../../../config/options/messages.options");
const resCode = MESSAGES.resCode;
const Op = Sequelize.Op;

const ApiError = require("../../../../config/middlewares/api.error");
const {
  asyncHandler,
} = require("../../../../config/middlewares/async.handler");

const getAllMasterData = asyncHandler(async (req, res) => {
  let column = "createdAt";
  let direction = "ASC";
  const tagQuery = {
    where: {
      status: OPTIONS.defaultStatus.ACTIVE
    },
    order: [[column, direction]],
  }
  const categoryQuery = {
    where: {
      parentId: null,
      status: OPTIONS.defaultStatus.ACTIVE
    },
    attributes: ["createdAt", "id", "name", "status", "isShowHome", "description"],
    include: [
      // {
      //   model: Categories,
      //   as: "subCatagories",
      //   // required: false,
      // },
      {
        model: CategoryTagMap,
        as: "categoryWithtags",
        include: [
          {
            model: Tag,
            as: "CategoryTagMapWithTag",
            attributes: ["title"],
          },
        ],
        // required: false,
      },
    ],
    order: [[column, direction]],
  };
  let variantQuery = {
    where: {
      price: {
        [Op.gte]: 1,
      },
    },
    order: [[column, direction]],
  };

  const productQuery = {
    where: {
      status: OPTIONS.defaultStatus.ACTIVE
    },
    include: [
      {
        model: Variant,
        as: "productWithVariants",
        where: {
          qty: { [Op.gt]: 0 },
        },
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
            model: Images,
            as: "variantImages",
          },
        ],
      },
      {
        model: ProdTagMap,
        as: "productWithTagMap",
      },

      {
        model: Categories,
        as: "productWithCategory",
      },
    ],
  };
  // const cartQuery = {
  //   where: {
  //     userId: req?.user?.id,
  //   },
  // }

  const promissArr = [
    Categories.findAll(categoryQuery),
    Product.findAll(productQuery),
    Tag.findAll(tagQuery),
    Attribute.findAll({}),
    Variant.findAll(variantQuery),
  ];
  Promise.all(promissArr)
    .then((values) => {
      // values = JSON.parse(JSON.stringify(values));
      
      // Filtered Products
      const filteredProducts = [];

      for (const prod of values[1]) {
        for (const item of prod.productWithVariants) {
          if (item.variantImages.length) {
            filteredProducts.push(prod);
          }
        }
      }
      const uniqueProducts = filteredProducts.filter(
        (ele, index) => filteredProducts.indexOf(ele) == index
      );

      // Filtered Category
      const includesArr = filteredProducts.map((p) => p.categoryId);
      const filteredArr = [];
      for (const item of includesArr) {
        let filter = values[0].filter((cat) => cat.id == item);
        filteredArr.push(...filter);
      }
      const uniqueCategories = filteredArr.filter(
        (ele, index) => filteredArr.indexOf(ele) == index
      );
      const result = {
        categories: uniqueCategories,
        products: uniqueProducts,
        tags: values[2],
        attributes: values[3],
        variants: values[4],
        // uniqueCategories: uniqueCategories
      };
      return res
        .status(resCode.HTTP_OK)
        .json(generateResponse(resCode.HTTP_OK, result));
    })
    .catch((err) => {
      throw new ApiError(
        "Internal Server Error",
        resCode.HTTP_INTERNAL_SERVER_ERROR
      );
    });

  //     return res.status(resCode.HTTP_OK).json(
  //       generateResponse(resCode.HTTP_OK, {
  //         message: MESSAGES.apiSuccessStrings.ADDED("Product"),
  //       })
  //     );
  //   }),
  //   getAll: asyncHandler(async (req, res) => {
  //     const {
  //       page = 1,
  //       pageSize = 10,
  //       column = "createdAt",
  //       direction = "DESC",
  //       search = null,
  //     } = req.query;

  //     console.log("your query",search);
  //     let offset = (page - 1) * pageSize || 0;
  //     let query = {
  //       where: {
  //           ...(search && {
  //           [Op.or]: {
  //             name: { [Op.like]: `%${search}%` },
  //             description: { [Op.like]: `%${search}%`},
  //             // description: { [Op.iLike]: `%${search}%` },
  //           },
  //        }),
  //       },
  //       order: [[column, direction]],
  //       // attributes: {
  //       //   exclude: ['userId'],
  //       // },
  //       include: {
  //         model: ProdAttributeMap,
  //         as: 'productWithProdAttributeMap',
  //         paranoid: true, required: false,
  //         // attributes: ['id', 'name', 'mobile'],
  //       },
  //       include: {
  //         model: Categories,
  //         as: 'productWithCategory',
  //         // attributes: ['id', 'name', 'mobile'],
  //       },
  //       offset: +offset,
  //       limit: +pageSize,
  //     };
  //     let response = await Model.findAndCountAll(query);

  //     return res
  //       .status(resCode.HTTP_OK)
  //       .json(generateResponse(resCode.HTTP_OK, response));
  //   }),
  //   getById: asyncHandler(async (req, res) => {
  //     let existing = await Model.findOne({
  //       where: {
  //         id: req.params.id,
  //       },
  //       include:[ {
  //         model: ProdAttributeMap,
  //         as: 'productWithProdAttributeMap',
  //         // attributes: ['id', 'title', 'course_id', 'start_date', 'end_date']
  //         paranoid: true, required: false,

  //         include: {
  //           model: Attribute,
  //           as: 'ProdAttributeMapWithAttributes',
  //           // attributes: ['id', 'title', 'course_id', 'start_date', 'end_date']
  //           // paranoid: true, required: false
  //         },
  //       },
  //       {
  //           model: Categories,
  //           as: 'productWithCategory',
  //           // attributes: ['id', 'title', 'course_id', 'start_date', 'end_date']
  //           // paranoid: true, required: false

  //       }
  //     ]
  //     });
  //     if (!existing) {
  //       let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Product");
  //       throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
  //     }
  //     return res
  //       .status(resCode.HTTP_OK)
  //       .json(generateResponse(resCode.HTTP_OK, existing));
  //   }),
  //   update: asyncHandler(async (req, res) => {
  //     let itemDetails = await Model.findOne({
  //       where: {
  //         id: req.params.id,
  //       },

  //     });

  //     if (req.body?.attributeArr) {
  //       req.body.attributeArr = JSON.parse(req.body.attributeArr);

  //         let deleteQuery = {
  //           where: {
  //             productId: req.params.id,
  //           },
  //         }
  //         await ProdAttributeMap.destroy(deleteQuery);

  //         let payloadMap = req.body.attributeArr.map(x => {
  //           return {
  //             attributeId: x.id,
  //             productId: req.params.id
  //           }
  //         })
  //         await ProdAttributeMap.bulkCreate(payloadMap);

  //     }

  //     if (!itemDetails) {
  //       let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Product");
  //       throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
  //     } else {

  //       if (req.file) {
  //         if (itemDetails?.bannerImage) {
  //           await cloudinary.deleteFile(itemDetails.bannerImage);
  //         }
  //         req.body.bannerImage = await cloudinary.uploadFromBuffer(req.file.buffer);
  //       }

  //       itemDetails = await generateCreateData(itemDetails, req.body);
  //       await itemDetails.save();
  //       return res.json(
  //         generateResponse(resCode.HTTP_OK, {
  //           message: MESSAGES.apiSuccessStrings.UPDATE("Product"),
  //         })
  //       );
  //     }
  //   }),
  //   delete: asyncHandler(async (req, res) => {
  //     let query = {
  //       where: {
  //         id: req.params.id,
  //       },
  //     };
  //     let item = await Model.findOne(query);
  //     if (item && item?.bannerImage) {
  //       await cloudinary.deleteFile(item.bannerImage);
  //     }

  //     let deletedItem = await Model.destroy(query);
  //     if (deletedItem) {
  //       let deleteQuery = {
  //         where: {
  //           productId: req.params.id,
  //         },
  //       }
  //       await ProdAttributeMap.destroy(deleteQuery);

  //       return res.json(
  //         generateResponse(resCode.HTTP_OK, {
  //           message: MESSAGES.apiSuccessStrings.DELETED("Product"),
  //         })
  //       );
  //     } else {
  //       let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Product");
  //       throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
  //     }
  //   }),
  //   getProductAttribute: asyncHandler(async (req, res) => {
  //     let existing = await ProdAttributeMap.findAll({
  //       where: {
  //         productId: req.params.id,
  //       },
  //     //   include:[ {
  //     //     model: ProdAttributeMap,
  //     //     as: 'productWithProdAttributeMap',
  //     //     // attributes: ['id', 'title', 'course_id', 'start_date', 'end_date']
  //     //     paranoid: true, required: false,

  //     // }
  //     // ]
  //     });
  //     if (!existing) {
  //       let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Product");
  //       throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
  //     }
  //     return res
  //       .status(resCode.HTTP_OK)
  //       .json(generateResponse(resCode.HTTP_OK, existing));
  //   }),
});
module.exports = {
  getAllMasterData,
};
