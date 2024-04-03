const router = require('express').Router();

const controller = require('./common')
const app = require("express")();
// const product=require("./product/routes")
// const category=require("./category/routes")
// const order=require("./order/routes")
// router.use('/product',product);
// router.use('/category',category);
// const controller=require("./common")

app.get(
  "/",
  //   authHandler.authenticateJWT(),
  //   rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  //   validate("checkParamId"),
  controller.getAllMasterData
);

module.exports = app;
