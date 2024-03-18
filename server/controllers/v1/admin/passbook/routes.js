const app = require('express')();
const authHandler = require('../../../../config/middlewares/auth.middleware');
const {
  validate,
  rolePermit,
} = require('../../../../config/middlewares/utils');
const roles = require('../../../../config/options/global.options').OPTIONS;
const controller = require('./passbook');

app.get(
  '/getAll',
  authHandler.authenticateJWT(),
  rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  controller.getAll
);

app.post(
  '/create',
  authHandler.authenticateJWT(),
  rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  validate('createPassbook'),
  controller.create
);

app.get(
  '/getById/:id',
  authHandler.authenticateJWT(),
  rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  validate('checkParamId'),
  controller.getById
);
app.delete(
  '/delete/:id',
  authHandler.authenticateJWT(),
  rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  validate('checkParamId'),
  controller.delete
);

app.put(
  '/update/:id',
  authHandler.authenticateJWT(),
  rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  validate('updatePassbook'),
  controller.update
);

module.exports = app;
