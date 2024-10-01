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

    let getBlog = await blogModel.find(query).sort({ createdAt: -1 });
    return { status: "sucess", data: getBlog };
  } catch (error) {
    return { status: "fail", message: "Error getting blog !" };
  }
};

// Get single blog by id
const getSingleBlog = async (req) => {
  try {
    let getID = req.params.id;
    let get = await blogModel.findById(getID);
    if (!get) {
      return { status: "Failed", message: "Blog not found" };
    } else {
      return { status: "success", data: get };
    }
  } catch (error) {
    return { status: "fail", message: "Internal error !" };
  }
};

module.exports = {
  createBlog,
  getBlog,
  getSingleBlog,
};
