const express = require("express");
const route = express.Router();
const { varifyiToken } = require("../middlewear/authMiddlewear");
//requrie controllelr

const {
  signupcontroller,
  logincontroller,
  changePassword,
  otpSend,
  profilecontroller,
  getAllBooksController,
  getAllBooksDeitialsController
} = require("../controller/authController");


// const { brainTreePaymentController, braintreeTokenController  } = require("../controller/paymentController");

//define route

//signup
route.post("/signup", signupcontroller);
//login
route.post("/login", logincontroller);
//forget -password
route.post("/email-send", otpSend);
//changepassword
route.post("/change-password", changePassword);
//profile
route.get("/profile/:id", profilecontroller);

// get all books
route.get("/books",getAllBooksController);
route.get("/books_detials/:id", getAllBooksDeitialsController);

//payment route token 
// route.get('/payments',braintreeTokenController)
// // payment checkout
// route.post("/checkout", brainTreePaymentController );


module.exports = route;
