const commentModel = require("../models/commentModel");

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

module.exports = {
  createComment,
};
