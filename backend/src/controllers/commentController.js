const { createComment, getComment } = require("../services/commentServices");

exports.createComments = async (req, res) => {
  let result = await createComment(req);
  res.status(200).json(result);
};
exports.getComments = async (req, res) => {
  let result = await getComment();
  res.status(200).json(result);
};
