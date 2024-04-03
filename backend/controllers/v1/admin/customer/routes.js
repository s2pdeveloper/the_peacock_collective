const app = require('express')();
const upload = require('../../shared/upload');
const {
  validate,
  rolePermit,
} = require('../../../../config/middlewares/utils');
const roles = require('../../../../config/options/global.options').OPTIONS;
const controller = require('./customer');

app.get(
  '/getAll',
  // rolePermit(roles.usersRoles.SUPER_ADMIN),
  controller.getAll
);
app.get(
  '/getAllCustomerDashBoard',
  // rolePermit(roles.usersRoles.SUPER_ADMIN),
  controller.getAllCustomerDashBoard
);

app.post(
  '/create',
  // rolePermit(roles.usersRoles.SUPER_ADMIN),
  upload.single('image'),
  validate('createCustomer'),
  controller.create
);

app.get(
  '/getById/:id',
  // rolePermit(roles.usersRoles.SUPER_ADMIN),
  validate('checkParamId'),
  controller.getById
);
app.delete(
  '/delete/:id',
  // rolePermit(roles.usersRoles.SUPER_ADMIN),
  validate('checkParamId'),
  controller.delete
);

app.put(
  '/update/:id',
  // rolePermit(roles.usersRoles.SUPER_ADMIN),
  upload.single('image'),
  validate('updateCustomer'),
  controller.update
);

module.exports = app;
