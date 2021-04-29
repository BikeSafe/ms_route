const mongoose = require("mongoose");
const { Schema } = mongoose;

const Route = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: Schema.Types.Decimal128 },
    public: { type: Boolean, default: true },
    done: { type: Boolean, default: false },
    startTime: { type: Date },
    endTime: { type: Date },
    startLocation: { type: Schema.Types.ObjectId, ref: "Coordinate" },
    endLocation: { type: Schema.Types.ObjectId, ref: "Coordinate" },
    creatorId: { type: Schema.Types.ObjectId, ref: "User" },
    memberIds: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Route", Route);