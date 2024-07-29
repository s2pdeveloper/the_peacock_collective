const router = require("express").Router();

const product = require("./product/routes");
const category = require("./category/routes");
const customer = require("./customer/routes");
const common = require("./common/routes");
const cart = require("./cart/routes");
const address = require("./address/routes");
const order = require("./order/routes");
const wishList = require("./wishList/routes");
const contact = require("./contact/routes");
const tag = require("./tag/routes");
const bespoke = require("./bespoke/routes");
const payment = require("./payment/routes");
const transactions = require("./transactions/routes");
const review = require("./reviews/routes");

router.use("/product", product);
router.use("/category", category);
router.use("/cart", cart);
router.use("/customer", customer);
router.use("/tag", tag);
router.use("/common", common);
router.use("/order", order);
router.use("/address", address);
router.use("/wishList", wishList);
router.use("/contact", contact);
router.use("/bespoke", bespoke);
router.use("/payment", payment);
router.use("/transactions", transactions);
router.use("/review", review);

module.exports = router;
