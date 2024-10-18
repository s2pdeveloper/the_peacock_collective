const app = require('express')();
const upload = require('../../shared/upload');
const {
  validate,
  rolePermit,
} = require('../../../../config/middlewares/utils');
const OPTIONS = require('../../../../config/options/global.options').OPTIONS;
const controller = require('./customer');

app.get(
  '/',
  // rolePermit(OPTIONS.usersRoles.SUPER_ADMIN),
  controller.getAll
);

app.post(
  '/',
  // rolePermit(roles.usersRoles.SUPER_ADMIN),
  // validate('createCustomer'),
  controller.create
);

app.get(
  '/:id',
  // rolePermit(roles.usersRoles.SUPER_ADMIN),
  // validate('checkParamId'),
  controller.getById
);
app.delete(
  '/:id',
  // rolePermit(roles.usersRoles.SUPER_ADMIN),
  // validate('checkParamId'),
  controller.delete
);

app.put(
  '/:id',
  // rolePermit(roles.usersRoles.SUPER_ADMIN),
  // validate('updateCustomer'),
  controller.update
);

module.exports = app;
