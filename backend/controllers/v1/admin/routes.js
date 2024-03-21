const router = require('express').Router();

const userRoutes = require('./user/routes');
const imageRoutes = require('./productImages/routes');

const customerRoutes = require('./customer/routes');
const categoriesRoutes = require("./categories/routes")
const attributeRoutes = require("./attribute/routes")
const productRoutes = require("./product/routes")
const sharedRoutes = require('./shared/route');
const razorpayRoutes = require('./razorpay/routes');
const vendorRoutes = require("./vendor/routes");
const variantRoutes = require("./variant/routes");
const productAttribute = require("./productAttribute/router");

router.use('/user', userRoutes);
router.use('/productImages', imageRoutes);
router.use('/customer', customerRoutes);
router.use('/category', categoriesRoutes);
router.use('/attribute', attributeRoutes);
router.use('/product', productRoutes);
router.use('/shared', sharedRoutes);
router.use('/razorpay', razorpayRoutes);
router.use('/vendor', vendorRoutes);
router.use('/variant', variantRoutes);
router.use('/productAttribute', productAttribute);


module.exports = router;
