const app = require("express")();
const authHandler = require("../../../../config/middlewares/auth.middleware");
const {
  rolePermit,
  validate,
} = require("../../../../config/middlewares/utils");

const roles = require("../../../../config/options/global.options").OPTIONS;
const user = require("./user");

app.get(
  "/",
  // authHandler.authenticateJWT(),
  // rolePermit(roles.usersRoles.SUPER_ADMIN),
  user.getAllUsers
);
app.put(
  "/:id",
  // authHandler.authenticateJWT(),
  // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.EMPLOYEE),
  // validate("updateProfile"),
  user.updateProfile
);

app.post("/signup", user.create);
app.post("/login", validate("login"), user.login);

app.get(
  "/profile",
  // authHandler.authenticateJWT(),
  // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.EMPLOYEE),
  user.getProfile
);
app.post("/reset-password", user.resetPassword);
app.post("/forgot-password", user.forgetPassword);
app.post("/set-password", user.setPassword);

app.post("/send-token", user.sendToken);
app.post("/verify-token", user.verifyToken);
app.put("/change-status", authHandler.authenticateJWT(), user.changeStatus);

app.delete(
  "/:id",
  // authHandler.authenticateJWT(),
  // rolePermit(roles.usersRoles.SUPER_ADMIN),
  // validate("checkParamId"),
  user.delete
);
app.post(
  "/createAndUpdateUserDevice",
  authHandler.authenticateJWT(),
  rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.EMPLOYEE),
  user.createAndUpdateUserDevice
);

module.exports = app;
