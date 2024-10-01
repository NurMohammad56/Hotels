const { query } = require("express");
const blogModel = require("../models/blogModel");

// Create
const createBlog = async (req) => {
  try {
    let newPost = new blogModel({ ...req.body });
    await newPost.save();
    return { status: "success", data: newPost };
  } catch (error) {
    return { status: "fail", message: "Error creating post !" };
  }
};

// Read
const getBlog = async (req) => {
  try {
    const { search, category, location } = req.query;

    let query = {};
    // Search Title, Content
    if (search) {
      query = {
        ...query,
        $or: [
          { title: { $regex: search, $options: "i" } },
          { content: { $regex: search, $options: "i" } },
        ],
      };
    }

    // Category
    if (category) {
      query = {
        ...query,
        category,
      };
    }

    // Location
    if (location) {
      query = {
        ...query,
        location,
      };
    }

    let getBlog = await blogModel.find(query);
    return { status: "sucess", data: getBlog };
  } catch (error) {
    return { status: "fail", message: "Error creating post !" };
  }
};

module.exports = {
  createBlog,
  getBlog,
};
