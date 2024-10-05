const { registerUser, userLogin } = require("../services/authUserServices");

exports.registerUsers = async (req, res) => {
  let result = await registerUser(req);
  return res.status(200).json(result);
};
exports.loginUsers = async (req, res) => {
  let result = await userLogin(req);
  return res.status(200).json(result);
};