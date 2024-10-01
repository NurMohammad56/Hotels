const blogModel = require("../models/blogModel");

const createBlog = async (req) => {
  try {
    let newPost = new blogModel({ ...req.body });
    await newPost.save();
    return { status: "success", data: newPost };
  } catch (error) {
    return { status: "fail", message: "Error creating post !" };
  }
};

const getBlog = async (req) => {
  try {
    let getBlog = await blogModel.find();
    return { status: "sucess", data: getBlog };
  } catch (error) {
    return { status: "fail", message: "Error creating post !" };
  }
};

module.exports = {
  createBlog,
  getBlog,
};
