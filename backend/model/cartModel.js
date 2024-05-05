const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    user_id: { type: String },
    products: [
      {
        book: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "book",
        }, // Assuming your book model is named "Books"
        quantity: {
          type: Number,
          default: 1, // Default quantity for each product in the cart
        },
      },
      { _id: false },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
