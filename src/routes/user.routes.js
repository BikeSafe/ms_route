const { Router } = require("express");
const router = Router();

const {
  addUser,
  updateUser,
  deleteUser,
  getUser,
  userExists,
} =  require("../controllers/user.controller");


// Routes

router.post("", userExists, addUser);

router.get("", getUser);

router.put("", updateUser);

router.delete("", deleteUser);

module.exports = router;;