const User = require("../model/userSchema.js");
const { mailSend } = require("../helpers/mailSend.js");
const mongoose = require("mongoose");
const bcryptjs = require("bcrypt");
const jwt = require("jsonwebtoken");
const Otp = require("../model/otpSchema.js");
const Books = require("../model/booksSchema.js");
const Cart = require("../model/cartModel.js");
const Order = require("../model/orderSchema");
const { hashPassword, comparePassword } = require("../helpers/authHelper.js");
const fs = require("fs");
const { registerEmail } = require("../helpers/reigtesSend.js");
const { sendOTPEmail } = require("../helpers/forgetPassword.js");
const { profileUpdatHtml } = require("../helpers/profileupdateHtml.js");
require("dotenv").config();
exports.signupcontroller = async (req, res) => {
  try {
    const { email, password, confirmpassword, name, role, phone } = req.body;

    if (!email || !password || !confirmpassword || !role || !phone) {
      return res.status(400).json({ msg: "Please enter all the fields" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ msg: "Password should be atleast 6 characters" });
    }
    if (confirmpassword !== password) {
      return res.status(400).json({ msg: "Both the passwords dont match" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ msg: "User with the same email already exists" });
    }

    const hashedPassword = await hashPassword({ password });
    // const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = new User({
      email,
      name,
      phone,
      role,
      password: hashedPassword,
      confirmpassword: hashedPassword,
    });

    const savedUser = await newUser.save();
    const emailType = "Register";
    (savedUser.password = undefined),
      (savedUser.confirmpassword = undefined),
      mailSend(email, emailType, registerEmail(name));
    res.json({
      msg: "Acount created sucessfully",
      savedUser,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.logincontroller = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password ) {
      return res.status(400).json({ msg: "Please enter all the fields" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ msg: "User with this email does not exist" });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(400).json({ msg: "username & Invalid Password" });
    }
    // if (role !== user.role) {
    //   return res.status(400).json({ msg: "unauthorized access" });
    // }
    user.password = undefined;
    user.confirmpassword = undefined;
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);

    // Send token in the response body along with user details
    res
      .status(200)
      .json({ token, user: { user: user }, msg: "Logged In Successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// otp send
exports.otpSend = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(email)) {
    //   return res.status(400).send({
    //     msg: "Invalid email address",
    //   });
    // }

    if (!user) {
      return res.status(404).send({
        success: false,
        msg: "Email does not exist",
      });
    } else {
      let otpCode = Math.floor(1000 + Math.random() * 9000);
      if (otpCode >= 4) {
        otpCode = await Otp.create({
          email: email,
          code: otpCode,
          expireIn: new Date().getTime() + 300 * 1000,
        });
      }
      //  console.log(otpCode.code)
      //send otp of email
      const emailType = "OTP";
      const emailSendOtp = mailSend(
        email,
        emailType,
        sendOTPEmail(otpCode.code)
      );

      res.status(200).send({
        msg: "Email has been sent",
        data: otpCode,
      });
    }
  } catch (err) {
    // console.error(err);
    res.status(500).send({ msg: err.message });
  }
};

//change pasword
exports.changePassword = async (req, res) => {
  try {
    const { email, otp, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    // Find OTP for the user's email
    const otpData = await Otp.findOne({ email });

    if (!otpData) {
      return res.status(400).json({ msg: "OTP not found or expired" });
    }

    // Check if OTP matches
    if (otpData.code !== otp) {
      return res.status(400).json({ msg: "Invalid OTP" });
    }

    // const passwordRegex =
    //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
    // if (!passwordRegex.test(newPassword)) {
    //   return res.status(400).send({
    //     msg: "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one symbol (!@#$%^&*)",
    //   });
    // }

    // Hash new password

    const hashedPassword = await bcryptjs.hash(password, 10);
    // Update user's password
    user.password = hashedPassword;
    await user.save();

    // Clear OTP after reset
    await Otp.deleteOne({ email });

    res.status(200).json({ msg: "Password reset successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error" });
  }
};

// profile controller
exports.updateProfilecontroller = async (req, res) => {
  const id = req.userId;
  console.log("profilecontroller id", id);
  try {
    console.log(req.body);
    const { email, password, confirmpassword, name, phone, img_url } = req.body;

    // const { image } = req.files;

    // if (!email || !password || !confirmpassword || !phone || !name) {
    //   return res.status(400).json({ msg: "Please enter all the fields" });
    // }
    // if(image&&image.length>100000){
    //   return res.status(400).json({ msg: "photo required less than 1mb" });
    // }

    // if (password.length < 6) {
    //   return res
    //     .status(400)
    //     .json({ msg: "Password should be at least 6 characters" });
    // }
    // if (confirmpassword !== password) {
    //   return res.status(400).json({ msg: "Both the passwords don't match" });
    // }
    const hashedPassword = await hashPassword(password);
    const user = await User.findById(id);
    console.log(user);
    if (user.email === email) {
      return res.status(400).json({ msg: "This Email is already used" });
    }
    const userUpdates = await User.findByIdAndUpdate(
      id,
      {
        email: email || user.email,
        name: name || user.name,
        phone: phone || user.phone,

        password: hashedPassword || user.password,
        confirmpassword: hashedPassword,
        image: img_url || user.image,
      },
      { new: true }
    );
    // if (image) {
    //   userUpdates.image.data = fs.readFileSync(image.path);
    //   userUpdates.image.contentType = image.type;
    // }

    await userUpdates.save();
    userUpdates.password = undefined;
    userUpdates.confirmpassword = undefined;
    const emailType = "ProfileUpdate";
    mailSend(user.email, emailType, profileUpdatHtml(user.email));
    return res.status(200).json({
      userUpdates,
      success: true,
      message: "Profile Updates Successfully",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// get all bookes
exports.getAllBooksController = async (req, res) => {
  try {
    // console.log("get req",req.userId)

    let page = Number(req.query.pageNumber) || 1;
    let limit = Number(req.query.pageSize) || 15;
    let skip = (page - 1) * limit;

    const books = await Books.find().skip(skip).limit(limit);
    return res.status(200).json({ msg: "book get sucssfully", books });
  } catch (err) {
    console.log(err);
  }
};
exports.getAllBooksDeitialsController = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await Books.findById({ _id: id });
    console.log(books);
    return res.status(200).json({ msg: "find get sucssfully", books });
  } catch (err) {
    console.log(err);
  }
};

//logout
exports.logout = async (req, res) => {
  try {
    res
      .status(201)
      .cookie("token", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
      })
      .json({
        success: true,
        msg: "Logged Out Successfully.",
      });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
//get user
exports.getUser = async (req, res) => {
  try {
    const id = req.userId;
    console.log(id);
    if (!id) return res.status(400).json({ msg: "No User ID provided" });

    let user = await User.findById({ _id: id });

    if (!user) {
      return res.status(400).json({ msg: "User not found." });
    }
    user.password = undefined;
    user.confirmpassword = undefined;
    return res.status(200).json({
      user,
      success: true,
      message: "Get  Successfully",
    });
    console.log(user);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e.toString() });
  }
};

//create book
exports.createbookController = async (req, res) => {
  try {
    const {
      title,
      author,
      image,
      price,
      description,
      year,
      quantity,
      category,
      value,
    } = req.body;

    const book = await Books.create({
      title: title,
      author: author,
      image: image,
      price: price,
      description: description,
      year: year,
      quantity: quantity,
      category: category,
      value: value,
    });
    return res.status(201).json({
      book,
      success: true,
      message: "Book created successfully!",
    });
  } catch (err) {
    console.log(err);
  }
};

//delete book
exports.deletbookController = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("this is delete id", id);
    const book = await Books.findByIdAndDelete(id);

    if (!book) {
      return res.status(400).json({ message: "No book found with that id" });
    }

    return res.status(200).json({ message: "The book has been deleted" });
  } catch (err) {
    res.send({
      statusCode: 500,
      err: err.message,
    });
  }
};
//update book
exports.updateBookController = async (req, res) => {
  try {
    const {
      title,
      author,
      image,
      price,
      description,
      year,
      quantity,
      category,
      value,
    } = req.body;

    let id = req.params.id;

    const book = await Books.findById(id);

    const updatedBook = await Books.findByIdAndUpdate(
      id,
      {
        title: title ? title : book.title,
        author: author ? author : book.author,
        image: image ? image : book.image,
        price: price ? price : book.price,
        author: author ? author : book.author,
        image: image ? image : book.image,
        price: price ? price : book.price,
        description: description ? description : book.description,
        year: year ? year : book.year,

        quantity: quantity ? quantity : book.quantity,
        category: category ? category : book.category,
        value: value ? value : book.value,
      },
      { new: true }
    ); //return the new data instead of the old one
    await updatedBook.save();
    res.send({ msg: "book update successfully", updatedBook });
    //checking the field to be updated and then updating it accordingly
  } catch (err) {
    res.send(err.message);
  }
};

exports.cartHandler = async (req, res) => {
  try {
    const { product_id } = req.body;
    if (!product_id) return res.status(400).json({ msg: "Missing product ID" });

    const book = await Books.findById({
      _id: product_id,
    });
    if (!book) return res.status(404).json({ msg: "Book not found" });

    let cart = await Cart.findOne({ user_id: req.userId }).populate("products");

    if (!cart) {
      cart = await Cart.create({
        user_id: req.userId,
        products: [{ book: book._id, quantity: 1 }],
      });
      return res.status(201).json(cart);
    } else {
      if (cart.products && Array.isArray(cart.products)) {
        console.log(product_id);
        console.log(cart.products);
        let index = cart.products.findIndex(
          (product) => product.book.toString() === product_id.toString()
        );
        console.log(index);
        if (index === -1) {
          cart.products.push({
            book: book._id,
            quantity: 1,
          });
        } else {
          cart.products[index].quantity =
            Number(cart.products[index].quantity) + 1;
        }
      }
      await cart.save();
      return res.status(200).json(cart);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: err.message });
  }
};
exports.getCartItems = async (req, res) => {
  const id = req.userId;
  try {
    const cart = await Cart.findOne({ user_id: id }).populate({
      path: "products.book",
      model: "book", // Assuming your Books model is named "Books"
    });

    if (!cart) {
      return res.status(404).json({ msg: "Cart is empty" });
    }

    res.status(200).json({ cart });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};

exports.updateCartItemQuantityController = async (req, res) => {
  try {
    const { cartId } = req.params; // Get the product ID from the request parameters
    const { quantity, productId } = req.body; // Get the new quantity from the request body
    const userId = req.userId; // Get the user ID from the request
    console.log("productis", productId);
    console.log("quantity", quantity);
    console.log("userId", userId);
    // Find the cart associated with the user
    const cart = await Cart.findOne({ id: cartId });

    if (!cart) {
      return res.status(404).json({ msg: "Cart not found" });
    }
    // console.log(cart)
    // Find the index of the item to be updated
    const index = cart.products.findIndex(
      (product) => product.book._id.toString() === productId.toString()
    );

    // If the item exists in the cart, update its quantity
    if (index !== -1) {
      cart.products[index].quantity = quantity;
      await cart.save();
      res.send(cart);
    } else {
      return res.status(404).json({ msg: "Item not found in cart" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: error.message });
  }
};

exports.removecartHandler = async (req, res) => {
  try {
    const productId = req.params.id;
    const userId = req.userId;
    console.log(productId);
    // Find the cart associated with the user
    const cart = await Cart.findOne({ user_id: userId });

    if (!cart) {
      return res.status(404).json({ msg: "Cart not found" });
    }

    console.log(cart);

    // Find the index of the item to be removed
    const index = cart.products.findIndex(
      (product) => product._id.toString() === productId.toString()
    );

    // If the item exists in the cart, remove it
    console.log(index);
    if (index !== -1) {
      cart.products.splice(index, 1);
      await cart.save();
      return res
        .status(200)
        .json({ msg: "Item removed from cart successfully" });
    } else {
      return res.status(408).json({ msg: "Item not found in cart" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};
exports.getOrderItems = async (req, res) => {
  const userId = req.userId;
  console.log(userId);
  try {
    const orders = await Order.find({ buyer: userId })
      .populate("buyer")
      .populate({
        path: "products.product_id",
        model: "book", // Assuming your Books model is named "Books"
      });

    if (!orders) {
      return res.status(404).json({ msg: "Order is empty" });
    }

    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: err.message });
  }
};
exports.getAllOrdersController = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("products.product_id")
      .populate("buyer", "name");
    // .sort({ createdAt: "-1" });
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error WHile Geting Orders",
      error,
    });
  }
};
//order status
exports.orderStatusController = async (req, res) => {
  try {
    const { orderId } = req.params;
    console.log("order id", orderId);
    const { status } = req.body;
    console.log("order statuss", status);
    const orders = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Updateing Order",
      error,
    });
  }
};
