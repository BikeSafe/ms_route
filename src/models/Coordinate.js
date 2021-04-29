const mongoose = require("mongoose");
const { Schema } = mongoose;

const Coordinate = new Schema(
  {
    lat: { type: Schema.Types.Decimal128 },
    lng: { type: Schema.Types.Decimal128 },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Coordinate", Coordinate);