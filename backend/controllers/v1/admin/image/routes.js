const app = require('express')();
const upload = require('../../shared/upload');
const { validate } = require('../../../../config/middlewares/utils');
const controller = require('./image');

app.get('/getAll', controller.getAll);

app.post('/create', upload.single('image'), controller.create);

app.get('/getById/:id', validate('checkParamId'), controller.getById);

app.delete(
  '/delete/:id',
  validate('checkParamId'),
  controller.delete
);

app.put('/update/:id', upload.single('image'), controller.update);

module.exports = app;
