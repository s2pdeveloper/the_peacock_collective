const app = require('express')();
const authHandler = require('../../../../config/middlewares/auth.middleware');
const upload = require('../../shared/upload');
const {
  validate,
  rolePermit,
} = require('../../../../config/middlewares/utils');
const roles = require('../../../../config/options/global.options').OPTIONS;
const controller = require('./customer');

app.get(
  '/getAll',
  authHandler.authenticateJWT(),
  rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  controller.getAll
);
app.get(
  '/getAllCustomerDashBoard',
  authHandler.authenticateJWT(),
  rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  controller.getAllCustomerDashBoard
);

app.post(
  '/create',
  authHandler.authenticateJWT(),
  rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  upload.single('image'),
  validate('createCustomer'),
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
  upload.single('image'),
  validate('updateCustomer'),
  controller.update
);

module.exports = app;
