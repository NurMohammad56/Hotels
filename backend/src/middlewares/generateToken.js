const jwt = require("jsonwebtoken");
require("dotenv").config();
const userModel = require("../models/authUserModel");
const JWT_SECRET = process.env.JWT_SECRET_KEY;

const generateToken = async (userId) => {
  try {
    const user = await userModel.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    let token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: "1h",
    });
    return token;
  } catch (error) {
    console.error("Error generating token", error);
    throw error;
  }
};
module.exports = generateToken;
