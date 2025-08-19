// Protected routes
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

// Protected route example
router.get("/data", auth, (req, res) => {
  res.json({ message: "Protected data", userId: req.user.id });
});

module.exports = router;
