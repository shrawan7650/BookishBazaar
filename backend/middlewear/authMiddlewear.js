const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
require("dotenv").config();
exports.varifyiToken = (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log("token 2", token);

    if (!token) {
      return res.send({ msg: "token is missing" });
    }
    //  console.log("token",token)
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = decode.id;
    // console.log(req.userId, "this is user id");

    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Invalid Token" });
  }
};

exports.isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
   
    if (!user) {
      return res.status(401).json({ message: "unauthorized access" });
    }
    if (user.role !== "admin") {
      return res.status(403).json({ message: "unauthorized access!" });
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
    res.status(401).send({
      success: false,
      err: err.message,
    });
  }
};
