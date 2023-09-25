const jwt = require("jsonwebtoken");
const dotEnv = require("dotenv").config().parsed;

const users = {
  user12: { password: "password1" },
  user2: { password: "password2" },
};

// Middleware to verify JWT and user role
function authorizeUser(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. Token not provided." });
  }

  try {
    const decoded = jwt.verify(token, dotEnv.secretKey);
    req.user = decoded;
    if (decoded.username in users) {
      next();
    } else {
      return res.status(403).json({ message: "Access denied." });
    }
  } catch (error) {
    return res.status(401).json({ message: "Access denied. Invalid token." });
  }
}

module.exports = authorizeUser;
