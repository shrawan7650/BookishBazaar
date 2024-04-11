const express = require("express");
const route = express.Router();
const formidable = require("express-formidable");
const { varifyiToken } = require("../middlewear/authMiddlewear");
//requrie controllelr

const {
  signupcontroller,
  logincontroller,
  changePassword,
  otpSend,
  profilecontroller,
  getAllBooksController,
  getAllBooksDeitialsController,
  logout,
  getUser
} = require("../controller/authController");
const { contactController } = require("../controller/contactController");

// const { brainTreePaymentController, braintreeTokenController  } = require("../controller/paymentController");

//define route

//signup
route.post("/signup", signupcontroller);

//login
route.post("/login", logincontroller);
//contact route
route.post("/contact", contactController);
//forget -password
route.post("/email-send", otpSend);
//changepassword
route.post("/change-password", changePassword);

// logo out
route.get("/logout", varifyiToken, logout);

route.get("/getuser", varifyiToken, getUser);
//profile
route.put("/profile", varifyiToken, profilecontroller);

// get all books
route.get("/books", getAllBooksController);

route.get("/books_detials/:id", getAllBooksDeitialsController);

//payment route token
// route.get('/payments',braintreeTokenController)
// // payment checkout
// route.post("/checkout", brainTreePaymentController );

module.exports = route;
