const User = require("../model/userSchema.js");
const bcryptjs = require("bcrypt");
const jwt = require("jsonwebtoken");
const Otp = require("../model/otpSchema.js");
const Books = require("../model/booksSchema.js");
const { hashPassword, comparePassword } = require("../helpers/authHelper.js");
const fs = require("fs");
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
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
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
    if (role !== user.role) {
      return res.send({ msg: "Role not found" });
    }
    user.password = undefined;
    user.confirmpassword = undefined;
    const token = jwt.sign(
      { id: user._id, email: user.email, name: user.name, role: user.role },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    //send cokkies  to client side for save it in browser
    res
      .cookie("token", token, {
        httpOnly: true,
        // secure: true,
        expiresIn: "1h",
      })
      .send({ msg: " login in successfully", token, user });
    // });
    // res.
    // res.status(201).send();
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
  const id = req.userId;

  try {
    const { email, password, confirmpassword, name, phone } = req.body;
    // const { image } = req.files;

    if (!email || !password || !confirmpassword || !phone || !name) {
      return res.status(400).json({ msg: "Please enter all the fields" });
    }
    // if(image&&image.length>100000){
    //   return res.status(400).json({ msg: "photo required less than 1mb" });
    // }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ msg: "Password should be at least 6 characters" });
    }
    if (confirmpassword !== password) {
      return res.status(400).json({ msg: "Both the passwords don't match" });
    }
    const hashedPassword = await hashPassword(password);
    const user = await User.findById(id);
    const userUpdates = await User.findByIdAndUpdate(
      id,
      {
        email: email || user.email,
        name: name || user.name,
        phone: phone || user.phone,

        password: hashedPassword || user.password,
        confirmpassword: hashedPassword,
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
    console.log(id)
    if (!id) return res.status(400).json({ msg: "No User ID provided" });

    let user = await User.findById({ _id: id });

    if (!user){ return res.status(400).json({ msg: "User not found." });}
    user.password = undefined;
    user.confirmpassword = undefined;
    return res.status(200).json({
      user,
      success: true,
      message: "Get  Successfully",})
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e.toString() });
  }
};