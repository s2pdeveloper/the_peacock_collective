const router = require('express').Router();

const controller = require('./common')
const app = require("express")();


app.get(
  "/",
  //   authHandler.authenticateJWT(),
  //   rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  //   validate("checkParamId"),
  controller.getAllCategory
);

module.exports = app;
