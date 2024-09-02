const app = require("express")();
const {
  validate,
  rolePermit,
} = require("../../../../config/middlewares/utils");
const controller = require("./queryMails");

// app.get(
//   '/getAll',
//   rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
//   controller.getAll
// );
app.get("/", controller.getAll);


// app.post(
//   "/",
//   // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
//   // validate("createCustomer"),
//   controller.create
// );

// app.get(
//   "/:id",
//   // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
//   // validate("checkParamId"),
//   controller.getById
// );
// app.delete(
//   "/:id",
//   // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
//   // validate("checkParamId"),
//   controller.delete
// );

// app.put(
//   "/:id",
//   // rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
//   // validate("updateCustomer"),
//   controller.update
// );

module.exports = app;
