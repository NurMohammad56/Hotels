const {
  createBlog,
  getBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
  relatedBlog,
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

exports.deleteBlogs = async (req, res) => {
  let result = await deleteBlog(req);
  return res.status(200).json(result);
};
exports.findRelatedBlogs = async (req, res) => {
  let result = await relatedBlog(req);
  return res.status(200).json(result);
};
