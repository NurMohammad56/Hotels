const express = require("express");
const router = express.Router();

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
const { createComments } = require("../controllers/commentController");

// <<<<<<<<<<<<<<<<<<<<<<<<<<<BLOG ROUTES>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Create a blog post
router.post("/create-blog", createBlogs);
// Read all blogs
router.get("/blog", getBlogs);
// Get single blog by id
router.get("/blog/:id", getSingleBlogs);
// Update blog
router.patch("/update-blog/:id", updateBlogs);
// Delete blog
router.delete("/blog/:id", deleteBlogs);
// Find related blog
router.get("/related-blog/:id", findRelatedBlogs);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<COMMENT ROUTES>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
router.post("/post-comment", createComments);

module.exports = router;
