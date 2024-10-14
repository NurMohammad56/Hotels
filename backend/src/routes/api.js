const express = require("express");
const router = express.Router();
const generateToken = require("../middlewares/generateToken");
const userModel = require("../models/authUserModel");
const authentication = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");

// Blog Controller
const {
  createBlogs,
  getBlogs,
  getSingleBlogs,
  updateBlogs,
  deleteBlogs,
  findRelatedBlogs,
} = require("../controllers/blogController");

// Comment Controller
const {
  createComments,
  getComments,
} = require("../controllers/commentController");

// User Authentication controller
const {
  registerUsers,
  allUsers,
  deleteUsers,
  updateUsers,
} = require("../controllers/authUserController");

// <<<<<<<<<<<<<<<<<<<<<<<<<<<BLOG ROUTES>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Create a blog post
router.post("/create-blog", authentication, isAdmin, createBlogs);
// Read all blogs
router.get("/blog", getBlogs);
// Get single blog by id
router.get("/blog/:id", getSingleBlogs);
// Update blog
router.patch("/update-blog/:id", authentication, updateBlogs);
// Delete blog
router.delete("/blog/:id", authentication, deleteBlogs);
// Find related blog
router.get("/related-blog/:id", findRelatedBlogs);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<COMMENT ROUTES>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Post comment
router.post("/post-comment", createComments);
// Get comment
router.get("/all-comment", getComments);

// <<<<<<<<<<<<<<<<<<<<<<<<<<USER AUTHENTICATION ROUTES>>>>>>>>>>>>>>>>>>>>>>>>
// Register
router.post("/register", registerUsers);
// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (!user) {
      res
        .status(400)
        .json({ message: "User not found, please provide valid email" });
    }

    let isPassword = await user.comparePass(password);
    if (!isPassword) {
      res.status(400).json({ message: "Please enter valid password" });
    }

    // Jwt token
    const token = await generateToken(user._id);
    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: true,
    });

    res.status(200).send({
      message: "Login successful",
      token,
      user: {
        _id: user._id,
        email: user.email,
        username: user.username,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login failed", error);
    return { status: "Login failed", message: "Internal error !" };
  }
});
// Logout
router.post("/logout", (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).send({ message: "Logout successful" });
  } catch (error) {
    console.error("Failed to logout", error);
    res.status(500).json({ message: "Logout failed !" });
  }
});
// Get all user
router.get("/all-user", allUsers);
// Delete a user
router.delete("/delete-user/:id", deleteUsers);
// Update a user
router.put("/update-user/:id", updateUsers);
//<<<<<<<<<<<<<<<<<<<<Complete backend>>>>>>>>>>>>>>>>>>>>>>

module.exports = router;
