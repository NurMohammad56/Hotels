const commentModel = require("../models/commentModel");

// Post comment
const createComment = async (req) => {
  try {
    const newComment = new commentModel(req.body);
    await newComment.save();
    return { status: "Comment created successful", data: newComment };
  } catch (error) {
    console.error("Error creating comment", error);
    return { status: "Error creating comment", message: "Internal error !" };
  }
};

// Get all comment
const getComment = async () => {
  try {
    let allComment = await commentModel.countDocuments({});
    return { status: "All comments", data: allComment };
  } catch (error) {
    console.error("Error getting comments", error);
    return { status: "Error getting comments", message: "Internal error !" };
  }
};

module.exports = {
  createComment,
  getComment,
};
