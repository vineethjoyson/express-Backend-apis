// Auth routes
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const dotenv = require("dotenv");

// Register
router.post("/register", async (req, res) => {
  try {
    dotenv.config();
    const { username, password, emailId } = req.body;
    const user = await User.create({ username, emailId, password });
    // await user.save();
    console.log("hello", process.env.JWT_SECRET);
    const token = jwt.sign(
      { id: user._id, emailId: user.emailId, username: user.username },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({ emailId });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.json({ emailId, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
