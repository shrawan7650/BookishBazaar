const User = require("../model/userSchema");
const bcryptjs = require("bcrypt");
const jwt = require("jsonwebtoken");
const Otp = require("../model/otpSchema.js");
const Books = require("../model/booksSchema.js");
const { hashPassword, comparePassword } = require("../helpers/authHelper.js");
require("dotenv").config();
exports.signupcontroller = async (req, res) => {
  try {
    const { email, password, confirmpassword, name } = req.body;
    if (!email || !password || !confirmpassword) {
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
      password: hashedPassword,
      confirmpassword: hashedPassword,
    });

    const savedUser = await newUser.save();
    (savedUser.password = undefined),
      (savedUser.confirmpassword = undefined),
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
    if (!email || !password) {
      return res.status(400).json({ msg: "Please enter all the fields" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .send({ msg: "User with this email does not exist" });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(400).send({
        msg: "Invalid Password",
      });
    }
    user.password = undefined;
    user.confirmpassword = undefined;
    const token = jwt.sign({ id: user._id, email: user.email, name: user.name }, process.env.SECRET_KEY);
  
    res.status(201).send({ msg: "login sucessfully", token, user });
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
      let otpCode = Math.floor(Math.random() * 10000 + 1);
      if (otpCode >= 4) {
        otpCode = await Otp.create({
          email: email,
          code: otpCode,
          expireIn: new Date().getTime() + 300 * 1000,
        });
      }

      //send otp of email
      // const emailSendOtp = mailSend({email,otpCode})

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
exports.profilecontroller = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById({ _id: id });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    user.password = undefined;
    user.confirmpassword = undefined;
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// gaet all bookes
exports.getAllBooksController = async (req, res) => {
  try {
    // console.log("get req",req.userId)
    const books = await Books.find();
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
