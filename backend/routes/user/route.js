const express = require("express");
const route = express.Router();
const formidable = require("express-formidable");
const { varifyiToken, isAdmin } = require("../../middlewear/authMiddlewear");
//requrie controllelr

const {
  signupcontroller,
  logincontroller,
  changePassword,
  otpSend,
  updateProfilecontroller,
  getAllBooksController,
  getAllBooksDeitialsController,
  logout,
  getUser,
  createbookController,
  deletbookController,
  updateBookController,
  cartHandler,
  getCartItems,
  removecartHandler,
  getOrderItems,
  getAllOrdersController,
  orderStatusController,
  updateCartItemQuantityController
} = require("../../controller/authController");
const { contactController } = require("../../controller/contactController");
const { checkOutHandler } = require("../../controller/paymentController");

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
//profile update
route.put("/profile", varifyiToken, updateProfilecontroller);

// create book
route.post("/createbook", varifyiToken, isAdmin, createbookController);
//delete book
route.delete("/deletebook/:id", varifyiToken, isAdmin, deletbookController);
//update book
route.put("/updatebook/:id", varifyiToken, isAdmin, updateBookController);
// get all books
route.get("/books", getAllBooksController);
//get book detials
route.get("/books_detials/:id", getAllBooksDeitialsController);

//payment route token
// route.get('/payments',braintreeTokenController)
// // payment checkout
route.post("/checkout", varifyiToken, checkOutHandler);

route.post("/cart", varifyiToken, cartHandler);
route.put("/update-cart-quantity/:productId",varifyiToken,updateCartItemQuantityController);

route.delete("/removecart/:id",varifyiToken,removecartHandler);
route.get("/getcart",varifyiToken, getCartItems);
route.get("/getorder",varifyiToken, getOrderItems);
// admin order get
route.get("/all-orders", varifyiToken, isAdmin, getAllOrdersController);
// order status update
route.put("/order-status/:orderId",orderStatusController);

module.exports = route;
