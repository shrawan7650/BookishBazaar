const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: String,
    // minLength: 6,
  },
  message: {
    required: true,
    type: String,
    trim: true,
  },
});

const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;
