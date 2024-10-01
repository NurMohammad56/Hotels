const express = require("express");
const router = express.Router();

const {
  createBlogs,
  getBlogs,
  getSingleBlogs,
  updateBlogs,
} = require("../controllers/blogController");

// Create a blog post
router.post("/create-blog", createBlogs);

// Read all blogs
router.get("/blog", getBlogs);

// Get single blog by id
router.get("/blog/:id", getSingleBlogs);

// Update blog
router.patch("/update-blog/:id", updateBlogs);

module.exports = router;
