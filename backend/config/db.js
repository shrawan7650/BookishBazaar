const mongoose = require("mongoose");
require("dotenv").config()
// Connect to the database
const conection_url = process.env.DATABASE_URL;
const connectDB = async () => {
  try {
    await mongoose.connect(conection_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.log("error", err);
  }
};

module.exports = connectDB;
