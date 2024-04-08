const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema(
  {
    email: String,
    code: String,
    expireIn: String,
  },
  
  { timestamps: true }
);
module.exports = mongoose.model("Otp", otpSchema);