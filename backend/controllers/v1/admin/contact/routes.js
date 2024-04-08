const app = require("express")();
const {
  validate,
  rolePermit,
} = require("../../../../config/middlewares/utils");

const controller = require("./contact");
app.get("/", controller.getAll);

module.exports = app;
