const app = require('express')();
const authHandler = require('../../../../config/middlewares/auth.middleware');
const roles = require('../../../../config/options/global.options').OPTIONS;
const {
  validate,
  rolePermit,
} = require('../../../../config/middlewares/utils');
const controller = require('./shop_notification');

app.get(
  '/getAllShopNotifications',
  authHandler.authenticateJWT,
  rolePermit(roles.usersRoles.SUPER_ADMIN, roles.usersRoles.SHOP_KEEPER),
  controller.getAllStudentNotifications
);

module.exports = app;
