const app = require("express")();
const razorpay = require("./razorpay");

app.post("/create", razorpay.createRazorPayOrder);
app.post("/verify", razorpay.verifyPayment);

module.exports = app;
