const router = require('express').Router();

// const userRoutes = require('./user/routes');

// const productImageRoutes = require('./productImages/routes');
// const customerRoutes = require('./customer/routes');
// const categoriesRoutes = require("./categories/routes")
// const attributeRoutes = require("./attribute/routes")
// const productRoutes = require("./product/routes")
// const sharedRoutes = require('./shared/route');
// const razorpayRoutes = require('./razorpay/routes');
// const vendorRoutes = require("./vendor/routes");
// const variantRoutes = require("./variant/routes");
// const productAttributeRoutes = require("./productAttribute/router");
// const AttrVariantMap = require("./AttrVariantMap/routes");

const product=require("./product/routes")
const category=require("./category/routes")
const order=require("./order/routes")
const common=require("./common/routes")



router.use('/product',product);
router.use('/category',category);
router.use('/common',common);
// router.use('/order',order)


module.exports = router;
