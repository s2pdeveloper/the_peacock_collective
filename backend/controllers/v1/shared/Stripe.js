const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//  const createPayment = async (body) => {
//     console.log('token',body);

//     const charge = await stripe.charges.create({
//         amount: body?.amount * 100, // amount in cents
//         currency: 'inr',
//         source: body.token, // token obtained with Stripe.js
//         description: 'Order',
//         // receipt_email: ''
//     });

//     return charge;
// }

const createPayment = async (body, user) => {
    console.log("body",body);
    let chargePayload={
        amount: body?.amount * 100,
        description: body?.desc,
        receipt_email: body?.email,
        currency: "inr",
    }
    console.log('chargePayload',chargePayload);
    
  if (user?.stripeId) {
    return await stripe.charges.create({
   ...chargePayload,
      customer: user.stripeId,
    });
  } else {
    let customer = await stripe.customers.create({
      email: body.email,
      source: body.token,
      name: body.name,
    });
    user.stripeId = customer.id;
    await user.save();
    return await stripe.charges.create({
        ...chargePayload,
      customer: customer.id,
    });
  }

};
module.exports = {
  createPayment,
};
