const Coordinate = require("../models/Coordinate");

const coordinateCtrl = {};

coordinateCtrl.addCoordinate = async (req, res, next) => {
  try {
    const { lat, lng } = req.body;

    if (!lat || !lng)
      throw "The required data is incomplete";

    const coordinate = new Coordinate(req.body);
    await coordinate.save();

    return res.status(201).json(coordinate);
  } catch (err) {
    if (!err.message) {
      return res.status(400).json({ message: err });
    } else {
      return res.status(400).json({
        message: "Error creating coordinate "
      });
    }
  }
};

coordinateCtrl.updateCoordinate =  async (req, res, next) => {
  try {
    const { coordinateId, lat, lng } = req.body;

    if (!coordinateId)
      throw "The required data is incomplete";

    var coordinate = await Coordinate.findById(coordinateId);
    if(lat)
      coordinate.lat = lat;
    if(lng)
      coordinate.lng = lng;
    await Coordinate.findByIdAndUpdate(coordinateId, coordinate);

    return res.status(200).json({
      message: "The coordinate has been updated successfully",
    });
  } catch (err) {
    if (!err.message) {
      return res.status(400).json({ message: err });
    } else {
      return res.status(400).json({
        message: "The coordinate does not exist",
      });
    }
  }
};

coordinateCtrl.deleteCoordinate = async (req, res, next) => {
  try {
    const { coordinateId } = req.body;

    if (!coordinateId)
      throw "The required data is incomplete";

    await Coordinate.findByIdAndDelete(coordinateId);

    return res.status(200).json({
      message: "Coordinate has been successfully removed"
    });
  } catch (err) {
    if (!err.message) {
      return res.status(400).json({ message: err });
    } else {
      return res.status(400).json({
        message: "The coordinate does not exist",
      });
    }
  }
};

coordinateCtrl.getCoordinate = async (req, res, next) => {
  try {
    const { coordinateId } = req.body;

    if (!coordinateId)
      throw "The required data is incomplete";

    const coordinate = await Coordinate.findById(coordinateId);

    return res.status(200).json(coordinate);
  } catch (err) {
    if (!err.message) {
      return res.status(400).json({ message: err });
    } else {
      return res.status(400).json({
        message: "The coordinate does not exist",
      });
    }
  }
};

module.exports = coordinateCtrl;