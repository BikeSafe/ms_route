const { Router } = require("express");
const router = Router();

const {
  addRoute,
  getPublicRoutes,
  qualifyRoute,
  addMember,
  removeMember,
  deleteRoute,
  getRoute,
} =  require("../controllers/route.controller");

const { userNotExists } = require("../controllers/user.controller");

// Routes

router.post("", addRoute);

router.get("/public", getPublicRoutes);

router.get("/", getRoute);

router.put("/qualify", qualifyRoute);

router.put("/add-member", userNotExists, addMember);

router.put("/remove-member", userNotExists, removeMember);

router.delete("/", deleteRoute);

module.exports = router;;