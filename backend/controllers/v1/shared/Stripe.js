
const Stripe = require('stripe');
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

const createPayment = (body) => {
    stripe.customers.create({
        email: body.email,
        source: body.token,
        name: body.name,
    })
      .then((customer) => {
            return stripe.charges.create({
                amount: body?.amount * 100,
                description: 'Product purchase',
                currency: 'inr',
                customer: customer.id
            });
        })
        .catch((err) => {
            console.error(err)     
        });

};
module.exports = {
    createPayment
};


