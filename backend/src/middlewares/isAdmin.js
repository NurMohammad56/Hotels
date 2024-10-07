const isAdmin = (req, res, next) => {
  if (req.role !== "admin") {
    return res.status(403).send({
      success: false,
      message:
        "You are not allowed to perform this actions. Please try to login as an admin",
    });
  }
  next();
};
module.exports = isAdmin;
