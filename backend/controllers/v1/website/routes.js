const router = require('express').Router();

const commonRoutes=require("./common/routes")



router.use('/common',commonRoutes);
// router.use('/order',order)


module.exports = router;
