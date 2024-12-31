const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET_KEY;

const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    // const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      res.status(401).send({ message: "No token provided" });
    }

    let decoded = jwt.verify(token, JWT_SECRET);
    if (!decoded.userId) {
      return { status: "Invalid token provided" };
    }

    req.userId = decoded.userId;
    req.role = decoded.role;
    next();
  } catch (error) {
    console.error("Error verify token");
    return { status: "invalid token" };
  }
};

module.exports = verifyToken;
