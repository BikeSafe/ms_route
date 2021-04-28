const { config } = require("dotenv");
config();

const urlAtlas = "mongodb+srv://gtzambranop:pass6834@jointroute.c8zri.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

module.exports = {
  MONGODB_URI: process.env.MONGODB_URI || urlAtlas,
  PORT: process.env.PORT || 4003,
  SECRET: "bikesafe",
};