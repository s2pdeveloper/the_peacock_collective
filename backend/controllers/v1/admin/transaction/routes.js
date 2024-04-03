const app = require("express")();
const {rolePermit} = require("../../../../config/middlewares/utils");
const roles = require("../../../../config/options/global.options").OPTIONS;
const multer = require("multer");
const path = require("path");
const transactionDetails = require("./transaction");

//for mobile
app.get(
    "/createOrder/:amount",
    // rolePermit("SUPER ADMIN", "ADMIN", "STUDENT"),
    transactionDetails.createOrder
);

//mobile
app.post(
    "/verify",
    // rolePermit("SUPER ADMIN", "ADMIN", "STUDENT"),
    transactionDetails.verify
);

app.get(
    "/getAllTransactionById",
    // rolePermit("SUPER ADMIN", "ADMIN", "STUDENT"),
    transactionDetails.getAllTransactionById
);

app.get("/getOrderByOrderId", transactionDetails.getOrderByOrderId);
app.post("/refund", transactionDetails.refund);

module.exports = app;
