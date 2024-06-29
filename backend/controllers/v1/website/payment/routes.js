const app = require("express")();
const controller = require("./payment");

app.post("/",controller.pay);

module.exports = app;