require("dotenv").config();
const bcryptjs = require("bcrypt");

// password hash function
exports.hashPassword = async ({ password }) => {
  try {
    
    const hashPassword = await bcryptjs.hash(password, 10);
    return hashPassword;
  } catch (error) {
    console.log("Hasing password logic", error);
  }
};

exports.comparePassword = async(password, hashPassword) => {
  try {
   const isMatch = await bcryptjs.compare(password, hashPassword);
    return isMatch;
  } catch (err) {
    return err;
  }
};
