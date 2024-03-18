const app = require('express')();
const authHandler = require('../../../../config/middlewares/auth.middleware');
const {
  validate,
  rolePermit,
} = require('../../../../config/middlewares/utils');
const roles = require('../../../../config/options/global.options').OPTIONS;

const controller = require('./subscription');

app.post(
  '/create',
  authHandler.authenticateJWT(),
  rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  controller.create
);

app.get(
  '/getAll',
  authHandler.authenticateJWT(),
  rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  controller.getAll
);
app.get(
  '/getById/:id',
  authHandler.authenticateJWT(),
  rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  controller.getById
);
app.put(
  '/update/:id',
  authHandler.authenticateJWT(),
  rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  controller.update
);

app.delete(
  '/delete/:id',
  authHandler.authenticateJWT(),
  rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  controller.delete
);



module.exports = app;
