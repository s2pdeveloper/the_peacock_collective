const router = require('express').Router();



const product=require("./product/routes")
const category=require("./category/routes")
const customer=require("./customer/routes")
// const common=require("./common/routes")
const cart=require("./cart/routes")



router.use('/product',product);
router.use('/category',category);
// router.use('/common',common);
router.use('/cart',cart);
router.use('/customer',customer)
// router.use('/product',product);
// router.use('/category',category);
router.use('/common',common);
// router.use('/order',order)


module.exports = router;
