const app = require("express")();
const upload = require("../../shared/upload");
const {
  validate,
  rolePermit,
} = require("../../../../config/middlewares/utils");
const roles = require("../../../../config/options/global.options").OPTIONS;

const controller=require('../product/product')

// app.get(
//   '/getAll',
//   authHandler.authenticateJWT(),
//   rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
//   controller.getAll
// );


app.get("/", controller.getAll);

// app.post(
//   "/",
//   // authHandler.authenticateJWT(),
//   // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
//   upload.single("image"),
//   // validate("createCustomer"),
//   controller.create
// );

// app.get(
//   "product-attribute/:id",
//   // authHandler.authenticateJWT(),
//   // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
//   // validate("checkParamId"),
//   controller.getProductAttribute
// );
// app.get(
//   "/:id",
//   // authHandler.authenticateJWT(),
//   // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
//   // validate("checkParamId"),
//   controller.getById
// );

// app.delete(
//   "/:id",
//   // authHandler.authenticateJWT(),
//   // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
//   // validate("checkParamId"),
//   controller.delete
// );

// app.put(
//   "/:id",
//   // authHandler.authenticateJWT(),
//   // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
//   upload.single("image"),
//   // validate("updateCustomer"),
//   controller.update
// );


module.exports = app;
