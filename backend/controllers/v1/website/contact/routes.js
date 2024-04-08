const app = require("express")();
const upload = require("../../shared/upload");
const {
  validate,
  rolePermit,
} = require("../../../../config/middlewares/utils");
const roles = require("../../../../config/options/global.options").OPTIONS;
const controller = require("./contact");

app.post(
  "/",
//  rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  controller.create
);

module.exports = app;
