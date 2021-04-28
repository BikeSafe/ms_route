const express = require("express");
const morgan = require("morgan");

const config = require("./config");

const app = express();

// Settings
app.set("port", config.PORT);

// Middlewares
app.use(morgan("tiny"));
app.use(express.json());

module.exports = app;