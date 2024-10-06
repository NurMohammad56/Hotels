const userModel = require("../models/authUserModel");
const generateToken = require("../middlewares/generateToken");

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
      return { status: "User not found", message: "Please enter valid email" };
    }

    let isPassword = await user.comparePass(password);
    if (!isPassword) {
      return { status: "Invalid password", message: "Enter valid password" };
    }

    // Jwt token
    const token = await generateToken(user._id);

    return {
      status: "Login Success",
      user: {
        _id: user._id,
        email: user.email,
        username: user.username,
        role: user.role,
      },
    };
  } catch (error) {
    console.error("Login failed", error);
    return { status: "Login failed", message: "Internal error !" };
  }
};

module.exports = {
  registerUser,
  userLogin,
};
