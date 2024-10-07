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

// All user
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

// Delete a user
const deleteUser = async (req) => {
  try {
    const { id } = req.params;
    const user = await userModel.findByIdAndDelete(id);
    if (!user) {
      return { status: "Users not found" };
    }
    return { status: "Users deleted successfully" };
  } catch (error) {
    console.error("Error deleting user", error);
    return {
      status: "User not deleted",
      message: "Internal error !",
    };
  }
};

module.exports = {
  registerUser,
  allUser,
  deleteUser,
};
