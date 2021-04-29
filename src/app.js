const express = require("express");
const morgan = require("morgan");

const config = require("./config");
const userRoutes = require("./routes/user.routes");

const app = express();

// Settings
app.set("port", config.PORT);

// Middlewares
app.use(morgan("tiny"));
app.use(express.json());

// Routes
app.use("/user", userRoutes);

module.exports = app;