const { createBlog, getBlog } = require("../services/blogServices");

exports.createBlogs = async (req, res) => {
  let result = await createBlog(req);
  return res.status(200).json(result);
};

exports.getBlogs = async (req, res) => {
  let result = await getBlog(req);
  return res.status(200).json(result);
};
