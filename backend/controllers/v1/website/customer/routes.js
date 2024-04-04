const app = require("express")();
const authHandler = require("../../../../config/middlewares/auth.middleware");
const upload = require("../../shared/upload");
const {
  validate,
  rolePermit,
} = require("../../../../config/middlewares/utils");
const roles = require("../../../../config/options/global.options").OPTIONS;
const controller=require('./customer')




app.get("/", controller.getAll);

app.post(
  "/",
  // authHandler.authenticateJWT(),
  // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
//   upload.single("image"),
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

app.get(
  "/verifyEmail/:id",
  // authHandler.authenticateJWT(),
  // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  // upload.single("image"),
  // validate("updateCustomer"),
  controller.verifyEmail
);

app.put(
  "/updatePassword",
  // authHandler.authenticateJWT(),
  // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  // upload.single("image"),
  // validate("updateCustomer"),
  controller.updatePassword
);


app.put(
  "/forgetPassword",
  // authHandler.authenticateJWT(),
  // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  // upload.single("image"),
  // validate("updateCustomer"),
  controller.forgetPassword
);


app.post(
  "/resetPassword",
  // authHandler.authenticateJWT(),
  // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  controller.resetPassword
);


app.put(
  "/:id",
  // authHandler.authenticateJWT(),
  // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  // upload.single("image"),
  // validate("updateCustomer"),
  controller.update
);






app.post('/login',controller.login);

module.exports = app;
