const app = require("express")();
const {
  rolePermit,
  validate,
} = require("../../../../config/middlewares/utils");

const roles = require("../../../../config/options/global.options").OPTIONS;
const controller = require("./user");

app.get("/", rolePermit(roles.usersRoles.SUPER_ADMIN), controller.getAllUsers);
app.post("/", controller.create);

app.put(
  "/:id",
  rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.EMPLOYEE),
  validate("updateProfile"),
  controller.updateProfile
);

app.post("/signup", controller.create);
app.post("/login", controller.login);
app.get("/getAllBespoke", controller.getAllBespoke);
app.get(
  "/getAllBespoke/:id",
  // authHandler.authenticateJWT(),
  // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  // validate("checkParamId"),
  controller.getBespokeById
);

app.get(
  "/profile",
  rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.EMPLOYEE),
  controller.getProfile
);
app.post("/resetPassword", controller.resetPassword);
app.post("/forgotPassword", controller.forgetPassword);
app.post("/setPassword", controller.setPassword);

app.post("/send-token", controller.sendToken);
app.post("/verify-token", controller.verifyToken);
app.put("/change-status", controller.changeStatus);

app.delete(
  "/:id",
  rolePermit(roles.usersRoles.SUPER_ADMIN),
  validate("checkParamId"),
  controller.delete
);
app.post(
  "/createAndUpdateUserDevice",
  rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.EMPLOYEE),
  controller.createAndUpdateUserDevice
);

module.exports = app;
