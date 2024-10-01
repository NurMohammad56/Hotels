const express = require("express");
const router = express.Router();

const { createBlogs, getBlogs } = require("../controllers/blogController");

// Read all blogs
router.get("/blog", getBlogs);

// Create a blog post
router.post("/create-blog", createBlogs);

module.exports = router;
