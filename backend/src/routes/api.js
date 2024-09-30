const express = require("express");
const router = express.Router();

const { createBlogs } = require("../controllers/blogController");

// Get all blogs
router.get("/blog", (req, res) => {
  res.send("This is blog");
});

// Create a blog post
router.post("/create-blog", createBlogs);

module.exports = router;
