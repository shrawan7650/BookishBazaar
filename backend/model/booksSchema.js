const mongoose = require("mongoose");

const bookeSchema = new mongoose.Schema({
  description: String,
  price: Number,
  category: String,
  title: String,
  image: String,
  author: String,
  value:String,
  year: Number,
  quantity: String,
});

const Books = mongoose.model("book", bookeSchema);

module.exports = Books;
