const app = require("express")();
const upload = require("../../shared/upload");
const {
  validate,
  rolePermit,
} = require("../../../../config/middlewares/utils");
const roles = require("../../../../config/options/global.options").OPTIONS;
const controller = require("./cart");



app.post(
  "/",
  // authHandler.authenticateJWT(),
  // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  // upload.single("image"),
  // validate("createCustomer"),
  controller.create
);

app.get("/customerAllCart/:id", controller.getAll);

app.delete(
  "/:id",
  // authHandler.authenticateJWT(),
  // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  // validate("checkParamId"),
  controller.remove 
);

app.get("/:id",controller.getById);
app.put(
  "/:id",
  // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  // validate("updateCustomer"),
  controller.updateAll
);

// app.put(
//   "/:id",
//   // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
//   // validate("updateCustomer"),
//   controller.update
// );


module.exports = app;
