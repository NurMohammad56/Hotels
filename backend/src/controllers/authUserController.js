const { registerUser } = require("../services/authUserServices");

exports.registerUsers = async (req, res) => {
  let result = await registerUser(req);
  return res.status(200).json(result);
};
