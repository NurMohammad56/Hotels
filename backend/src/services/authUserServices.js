const userModel = require("../models/authUserModel");

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

module.exports = {
  registerUser,
};
