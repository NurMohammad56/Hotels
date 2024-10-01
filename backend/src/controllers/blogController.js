const {
  createBlog,
  getBlog,
  getSingleBlog,
  updateBlog,
} = require("../services/blogServices");

exports.createBlogs = async (req, res) => {
  let result = await createBlog(req);
  return res.status(200).json(result);
};

exports.getBlogs = async (req, res) => {
  let result = await getBlog(req);
  return res.status(200).json(result);
};

exports.getSingleBlogs = async (req, res) => {
  let result = await getSingleBlog(req);
  return res.status(200).json(result);
};
exports.updateBlogs = async (req, res) => {
  let result = await updateBlog(req);
  return res.status(200).json(result);
};
