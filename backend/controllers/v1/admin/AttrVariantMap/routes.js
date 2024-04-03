const app = require("express")();
const {
  validate,
  rolePermit,
} = require("../../../../config/middlewares/utils");
const upload = require("../../shared/upload");
const roles = require("../../../../config/options/global.options").OPTIONS;
const controller = require("./AttrVariantMap");

app.get("/", controller.getAll);
app.post(
  "/",
  // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  // validate("createCustomer"),
  controller.create
);

app.get(
  "/:id",
  // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  // validate("checkParamId"),
  controller.getById
);

app.delete(
  "/:id",
  // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  // validate("checkParamId"),
  controller.delete
);

app.put(
  "/:id",
  // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  // validate("updateCustomer"),
  upload.single("productImage"),
  controller.update
);

module.exports = app;
