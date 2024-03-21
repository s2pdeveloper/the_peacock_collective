const app = require("express")();
const authHandler = require("../../../../config/middlewares/auth.middleware");
const {
  validate,
  rolePermit,
} = require("../../../../config/middlewares/utils");
const upload = require("../../shared/upload");
const roles = require("../../../../config/options/global.options").OPTIONS;
const controller = require("./images");

// app.get(
//   '/getAll',
//   authHandler.authenticateJWT(),
//   rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
//   controller.getAll
// );
app.get("/", controller.getAll);
app.post(
  "/",
  // authHandler.authenticateJWT(),
  // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  // validate("createCustomer"),
  upload.single('productImage'),
  controller.create
);

app.get(
  "/:id",
  // authHandler.authenticateJWT(),
  // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  // validate("checkParamId"),
  controller.getById
);

app.delete(
  "/:id",
  // authHandler.authenticateJWT(),
  // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  // validate("checkParamId"),
  controller.delete
);

app.put(
  "/:id",
  // authHandler.authenticateJWT(),
  // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  // validate("updateCustomer"),
  upload.single("productImage"),
  controller.update
);

module.exports = app;
