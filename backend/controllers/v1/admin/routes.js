const router = require('express').Router();

const userRoutes = require('./user/routes');

const productImageRoutes = require('./productImages/routes');
const customerRoutes = require('./customer/routes');
const categoriesRoutes = require("./categories/routes")
const attributeRoutes = require("./attribute/routes")
const productRoutes = require("./product/routes")
const sharedRoutes = require('./shared/route');
const razorpayRoutes = require('./razorpay/routes');
const vendorRoutes = require("./vendor/routes");
const variantRoutes = require("./variant/routes");
const productAttributeRoutes = require("./productAttribute/router");
const AttrVariantMap = require("./AttrVariantMap/routes");
const tagsRoutes = require("./tag/routes");

router.use('/user', userRoutes);
router.use('/productImages', productImageRoutes);
router.use('/customer', customerRoutes);
router.use('/category', categoriesRoutes);
router.use('/attribute', attributeRoutes);
router.use('/product', productRoutes);
router.use('/shared', sharedRoutes);
router.use('/razorpay', razorpayRoutes);
router.use('/vendor', vendorRoutes);
router.use('/variant', variantRoutes);
router.use('/productAttribute', productAttributeRoutes);
router.use('/AttrVariantMap', AttrVariantMap);
router.use('/tag', tagsRoutes);


module.exports = router;
