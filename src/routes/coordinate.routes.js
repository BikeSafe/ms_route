const { Router } = require("express");
const router = Router();

const {
  addCoordinate,
  updateCoordinate,
  deleteCoordinate,
  getCoordinate,
} =  require("../controllers/coordinate.controller");


// Routes

router.post("", addCoordinate);

router.get("", getCoordinate);

router.put("", updateCoordinate);

router.delete("", deleteCoordinate);

module.exports = router;