const express = require("express");
const morgan = require("morgan"); // for logging
const app = express();

// 🔹 Built-in middleware
app.use(express.json()); // Parse JSON body

// 🔹 Third-party middleware
app.use(morgan("dev")); // Log requests in console

// 🔹 Custom middleware (example)
function validateRequest(req, res, next) {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ error: "Name and age are required!" });
  }

  if (typeof age !== "number") {
    return res.status(400).json({ error: "Age must be a number!" });
  }

  next(); // ✅ Go to next middleware/route handler
}

// POST API with middleware
app.post("/api/data", validateRequest, (req, res) => {
  const { name, age } = req.body;

  res.json({
    message: "Data received successfully!",
    receivedData: { name, age },
  });
});

// Error handling middleware (global)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
