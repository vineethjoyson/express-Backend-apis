// Protected routes
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");
// Protected route example
router.post("/data", auth, async (req, res) => {
  const { emailId } = req.body;
  console.log(req.body);
  const user = await User.findOne({ emailId });
  res.json(user);
});

module.exports = router;
