// require('dotenv').config();
// const braintree = require("braintree");

// var gateway = new braintree.BraintreeGateway({
//   merchantId: process.env.BRAIN_TREE_MERCHANT_ID,
//   publicKey: process.env.BRAIN_TREE_PUBLIC_KEY,
//   privateKey: process.env.BRAIN_TREE_PRIVATE_KEY,
// });

// //token
// exports.braintreeTokenController = async (req, res) => {
//   try {
//     gateway.clientToken.generate({}, function (err, response) {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//         res.send(response);
//       }
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.brainTreePaymentController = async (req, res) => {
//   try {
//     const { nonce, cart } = req.body;
//     let total = 0;
//     cart.map((i) => {
//       total += i.price;
//     });
//     gateway.transaction.sale({
//       amount: total,
//       paymentMethodNonce: nonce,
//       options: {
//         submitForSettlement: true,
//       },
//     }, function (error, result) {
//       if (result) {
//         const order = new orderModel({
//           products: cart,
//           payment: result,
//           buyer: req.user._id,
//         }).save();
//         res.json({ ok: true });
//       } else {
//         res.status(500).send(error);
//       }
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
