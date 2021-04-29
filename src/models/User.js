const mongoose = require("mongoose");
const { Schema } = mongoose;

const User = new Schema(
  {
    name: { type: String, required: true },
    id2: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("User", User);