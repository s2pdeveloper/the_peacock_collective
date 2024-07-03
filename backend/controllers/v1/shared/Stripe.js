
const Stripe =  require('stripe');
const stripe = new Stripe('sk_test_51PWF72RoUfMOrpS2zDwqtAFoOKckFXq2lO6SgiMj0TBzJ89PmHcrpgNVplYNCbja1DovA21PKH9s96vySAGaJPSQ00sLv2u93I');
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


 const createPayment = async ({payload}) => {
    console.log('token',payload);
    
    const charge = await stripe.charges.create({
        amount: payload?.amount * 100, // amount in cents
        currency: 'inr',
        source: payload?.token?.id, // token obtained with Stripe.js
        description: 'Charge for test@example.com',
        // receipt_email: ''
    });

    return charge;
}

//  const createPayment = (body) => {
//     stripe.customers.create({
//         email: body.stripeEmail,
//         source: body.stripeToken,
//         source: 'pk_test_51PWF72RoUfMOrpS2zDM6QRuvnQHPwSKGtOx93h3JHPdVxcNpL6NbhmnqdlUHqUUiECqETZrTID9PbhAIdi210qoU001RM4Ppe4',
//         name: 'Gourav Hammad',
//         address: {
//             line1: 'TC 9/4 Old MES colony',
//             postal_code: '452331',
//             city: 'Indore',
//             state: 'Madhya Pradesh',
//             country: 'India',
//         }
//     })
//         .then((customer) => {
//             console.log("customer", customer);

//             return stripe.charges.create({
//                 amount: 5000,     // Charging Rs 25
//                 description: 'Web Development Product',
//                 currency: 'INR',
//                 customer: customer.id
//             });
//         })
//         .then((charge) => {
//             console.log("charge---", charge);
//             // res.send("Success")  // If no error occurs
//         })
//         .catch((err) => {
//             // res.send(err)       // If some error occurs
//         });

// };
module.exports = {
    createPayment
};


