const stripe = require("stripe")(process.env.SECRET_STRIPE_KEY);
const User = require("../model/userSchema.js");
const Order = require("../model/orderSchema");
const Cart = require("../model/cartModel.js");
const { generatePaymentConfirmationHTML } = require("../helpers/PymentHtml");
const { mailSend } = require("../helpers/mailSend");
const mongoose = require("mongoose");
exports.checkOutHandler = async (req, res) => {
  try {
    const id = req.userId;
    let userData = await User.findById(id).select({ password: 0 });
    console.log(req.body.items[0].price);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        console.log(item);
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: item.name,
            },
            unit_amount: Number(item.price) * 100,
          },
          quantity: item.quantity,
        };
      }),
      invoice_creation: {
        enabled: true,
      },
      shipping_address_collection: {
        allowed_countries: ["IN", "US"],
      },
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    console.log(id, req.body.items);

    if (session) {
      // Redirect to payment URL
      res.json({ url: session.url });

      // Wait for payment confirmation from Stripe
      const paymentConfirmation = await waitForPaymentConfirmation(session.id);

      // If payment is confirmed, save the order and send confirmation email
      if (paymentConfirmation.payment_status === "paid") {
        // Extract product IDs and quantities from request
        await Cart.deleteOne({ user_id: req.userId });
        const products = req.body.items.map((item) => ({
          product: new mongoose.Types.ObjectId(item.id),

          quantity: item.quantity,
        }));
        const order = new Order({
          products: products, // Assuming each item has an _id field
          payment: paymentConfirmation, // Store payment details if needed
          buyer: id,
        });

        // Save the order to the database
        await order.save();

        // Send payment confirmation email
        const emailType = "Payment";
        await mailSend(
          userData.email,
          emailType,
          generatePaymentConfirmationHTML(
            userData.name,
            session.amount_total / 100
          )
        );
      }
      // res.json({ ok: true }); // Send success response

      // } else {
      //   res.status(500).send("Payment not successful");
      // }
    }
  } catch (err) {
    console.error("Stripe error:", err);
    res.status(500).send(`Error: ${err.message}`);
  }
};

// Function to wait for payment confirmation from Stripe
async function waitForPaymentConfirmation(sessionId) {
  return new Promise((resolve, reject) => {
    const interval = setInterval(async () => {
      try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        if (session.payment_status === "paid") {
          clearInterval(interval);
          resolve(session);
        }
      } catch (error) {
        clearInterval(interval);
        reject(error);
      }
    }, 1000); // Check payment status every second
  });
}
