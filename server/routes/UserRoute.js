const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const dotEnv = require("dotenv").config().parsed;
const authorizeUser = require("../middleware/authrization.js");

const users = {
  user1: { password: "password1" },
  user2: { password: "password2" },
};

// Login route
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password || users[username].password !== password) {
    return res.status(401).json({ message: "Authentication failed." });
  }

  const token = jwt.sign({ username }, dotEnv.secretKey, {
    expiresIn: "1h",
  });
  res.json({ message: "Login successful", token });
});

router.get("/admin", authorizeUser, (req, res) => {
  res.json({ message: "You have access to admin resources." });
});

module.exports = router;
