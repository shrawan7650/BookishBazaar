const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    
    products: [
      {
        product_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "book",
        },
        quantity: {
          type: Number,
        },
      },
      {
        _id: false,
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    status: {
      type: String,
      default: "Not Process",
      enum: ["Not Process", "Processing", "Shipped", "delivered", "cancel"], // corrected "deliverd" to "delivered"
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
