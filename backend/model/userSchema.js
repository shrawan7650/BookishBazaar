const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    unique: true,
    trim: true,
  },
  password: {
    required: true,
    type: String,
    // minLength: 6,
  },
  confirmpassword: {
    required: true,
    type: String,
    trim: true,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
