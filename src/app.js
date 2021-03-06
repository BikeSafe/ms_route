const express = require("express");
const morgan = require("morgan");

const config = require("./config");
const userRoutes = require("./routes/user.routes");
const coordinateRoutes = require("./routes/coordinate.routes");
const routeRoutes = require("./routes/route.routes");

const app = express();

// Settings
app.set("port", config.PORT);

// Middlewares
app.use(morgan("tiny"));
app.use(express.json());

// Routes
app.use("/user", userRoutes);
app.use("/coordinate", coordinateRoutes);
app.use("/route", routeRoutes);

module.exports = app;