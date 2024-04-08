const mongoose = require("mongoose");

const bookeSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  title: String,
  img: String,
  author: String,
  language: String,
  country: String,
  pages: Number,
  year: Number,
  quantity: String,
});

const Books = mongoose.model("book", bookeSchema);

module.exports = Books;
