const router = require('express').Router();



const product=require("./product/routes")
const category=require("./category/routes")
const customer=require("./customer/routes")
const common=require("./common/routes")
const cart=require("./cart/routes")
const address=require("./address/routes")
const order=require("./order/routes")

const tag = require("./tag/routes")


router.use('/product',product);
router.use('/category',category);
router.use('/cart',cart);
router.use('/customer',customer)
router.use('/tag',tag);
// router.use('/product',product);
// router.use('/category',category);
router.use('/common',common);
router.use('/order',order)
router.use('/address',address)

module.exports = router;
