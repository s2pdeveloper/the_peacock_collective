// const RazorPay = require("razorpay");

// const instance = new RazorPay({
//     key_id: process.env.RAZORY_PAY_ID,
//     key_secret: process.env.RAZORY_PAY_API_KEY,
// });

// exports.instance = instance;

// exports.createPlan = async data => {
//     try {
//         return await instance.plans.create({
//             period: data.period,
//             interval: data.interval,
//             item: {
//                 name: data.title,
//                 amount: data.amount * 100,
//                 currency: "INR",
//                 description: data.description,
//             },
//             notes: {
//                 role: data.role,
//             },
//         });
//     } catch (error) {
//         customErrorLogger(error);
//     }
// };

// exports.getPlanById = async subscriptionId => {
//     try {
//         return await instance.plans.fetch(subscriptionId);
//     } catch (error) {
//         customErrorLogger(error);
//     }
// };

// exports.createSubscription = async data => {
//     try {
//         return await instance.subscriptions.create({
//             plan_id: data.subscriptionId,
//             customer_notify: 0,
//             quantity: data.quantity,
//             total_count: data.interval,
//             start_at: Math.floor(new Date(data.validFrom).getTime() / 1000),
//             expire_by: Math.floor(new Date(data.validTill).getTime() / 1000),
//             addons: [],
//             notes: {},
//         });
//     } catch (error) {
//         customErrorLogger(error);
//     }
// };

// // Once cancelled, you cannot renew or reactivate it.
// exports.cancelSubscription = async id => {
//     try {
//         const option = {
//             cancel_at_cycle_end: 0,
//         };
//         return await instance.subscriptions.cancel(id, options);
//     } catch (error) {
//         customErrorLogger(error);
//     }
// };

// exports.createOrder = async options => {
//     try {
//         return await instance.orders.create(options);
//     } catch (error) {
//         // console.log(JSON.parse(error));
//         console.log("error11111", JSON.stringify(error));
//         customErrorLogger(error);
//     }
// };
// exports.fetchPayment = async paymentId => {
//     try {
//         return await instance.payments.fetch(paymentId);
//     } catch (error) {
//         customErrorLogger(error);
//     }
// };
// exports.refund = async (paymentId, amount) => {
//     try {
//         return await instance.payments.refund(paymentId, { amount });
//     } catch (error) {
//         customErrorLogger(error);
//     }
// };
