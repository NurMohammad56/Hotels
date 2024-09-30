const blogModel = require("../models/blogModel");

const createBlog = async (req) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.log("Error creating post: ", error);
    resizeBy.status(500).send({ message: "Error creating post" });
  }
};

module.exports = {
  createBlog,
};
