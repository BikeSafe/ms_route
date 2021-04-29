const mongoose = require("mongoose");
const { Schema } = mongoose;

const Route = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: Schema.Types.Decimal128, default: 0, min: 0, max: 5 },
    public: { type: Boolean, default: true },
    done: { type: Boolean, default: false },
    startTime: { type: Date },
    endTime: { type: Date },
    startLocationId: { type: Schema.Types.ObjectId, ref: "Coordinate" },
    endLocationId: { type: Schema.Types.ObjectId, ref: "Coordinate" },
    creatorId2: { type: Number, ref: "User" },
    memberId2s: [{ type: Number, ref: "User" }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Route", Route);