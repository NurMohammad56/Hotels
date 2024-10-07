const userModel = require("../models/authUserModel");
const generateToken = require("../middlewares/generateToken");
// const { encodeToken } = require("../helpers/tokenHelper");

// User register
const registerUser = async (req) => {
  try {
    const { email, username, password } = req.body;
    let createUser = new userModel({ email, username, password });
    await createUser.save();
    return { status: "Account created successfull", user: createUser };
  } catch (error) {
    console.error("Error register", error);
    return {
      status: "Account create unsuccessfull",
      message: "Internal error !",
    };
  }
};

const allUser = async (req) => {
  try {
    const user = await userModel.find({}, "id email role");
    return { status: "Users found successfully", user };
  } catch (error) {
    console.error("Failed to load all data", error);
    return {
      status: "Failed to fetch user",
      message: "Internal error !",
    };
  }
};

module.exports = {
  registerUser,
  allUser,
};
