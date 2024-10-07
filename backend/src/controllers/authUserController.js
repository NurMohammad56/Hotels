const {
  registerUser,
  allUser,
  deleteUser,
} = require("../services/authUserServices");

exports.registerUsers = async (req, res) => {
  let result = await registerUser(req);
  return res.status(200).json(result);
};
exports.allUsers = async (req, res) => {
  let result = await allUser(req);
  return res.status(200).json(result);
};
exports.deleteUsers = async (req, res) => {
  let result = await deleteUser(req);
  return res.status(200).json(result);
};
