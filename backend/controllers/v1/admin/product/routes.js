const app = require("express")();
const authHandler = require("../../../../config/middlewares/auth.middleware");
const upload = require("../../shared/upload");
const {
  validate,
  rolePermit,
} = require("../../../../config/middlewares/utils");
const roles = require("../../../../config/options/global.options").OPTIONS;
const controller = require("./product");

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
  upload.fields([
    { name: 'bannerImage', maxCount: 1 },
    { name: 'productImage', maxCount: 10 }
  ]),
  // validate("createCustomer"),
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
  upload.single("image"),
  // validate("updateCustomer"),
  controller.update
);

module.exports = app;
