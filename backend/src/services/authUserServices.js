const userModel = require("../models/authUserModel");

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

// User login
const userLogin = async (req) => {
  try {
    const { email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (!user) {
      return { status: "User not found" };
    }

    let isPassword = await userModel.comparePassword(password);
  } catch (error) {
    console.error("Login failed", error);
    return { status: "Login failed", message: "Internal error !" };
  }
};

module.exports = {
  registerUser,
  userLogin,
};
