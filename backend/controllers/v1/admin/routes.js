const router = require('express').Router();

const userRoutes = require('./user/routes');
const imageRoutes = require('./image/routes');

const customerRoutes = require('./customer/routes');
const passbookRoutes = require('./passbook/routes');
const subscriptionRoutes = require('./subscription/routes');
const shopNotificationRoutes = require('./shop_notification/routes');
const shared = require('./shared/route');
const razorpay = require('./razorpay/routes');

router.use('/user', userRoutes);
router.use('/images', imageRoutes);
router.use('/customer', customerRoutes);
router.use('/passbook', passbookRoutes);
router.use('/subscription', subscriptionRoutes);
router.use('/notification', shopNotificationRoutes);
router.use('/shared', shared);
router.use('/razorpay', razorpay);


module.exports = router;
