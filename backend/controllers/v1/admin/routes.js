const router = require('express').Router();

const userRoutes = require('./user/routes');
const imageRoutes = require('./images/routes');

const customerRoutes = require('./customer/routes');
const categoriesRoutes = require("./categories/routes")
const attributeRoutes = require("./attribute/routes")
const productRoutes = require("./product/routes")
const shared = require('./shared/route');
const razorpay = require('./razorpay/routes');
const vendor=require("./vendor/routes");

router.use('/user', userRoutes);
router.use('/images', imageRoutes);
router.use('/customer', customerRoutes);
router.use('/category', categoriesRoutes);
router.use('/attribute', attributeRoutes);
router.use('/product', productRoutes);
router.use('/shared', shared);
router.use('/razorpay', razorpay);
router.use('/vendor', vendor);


module.exports = router;
