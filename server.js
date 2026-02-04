const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const servers = dns.getServers();
console.log("Node.js is using these DNS servers:", servers);

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./servers/db");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const helloRoutes = require("./routes/helloRoutes");
const statusRoutes = require("./routes/statusRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/hello", helloRoutes);
app.use("/api/status", statusRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("NodeJS Final Project Server Running");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
