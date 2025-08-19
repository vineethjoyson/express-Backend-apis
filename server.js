// Entry point for Express server
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const protectedRoutes = require("./routes/protected");
const morgan = require("morgan");
dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));
// Database connection
const connectDB = require("./config/db");
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
