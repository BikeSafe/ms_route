const Route = require("../models/Route");

const routeCtrl = {};

routeCtrl.addRoute = async (req, res, next) => {
  try {
    const { name, creatorId2 } = req.body;

    if (!name || !creatorId2)
      throw "The required data is incomplete.";

    const route = new Route(req.body);
    route.memberId2s.push(creatorId2);
    await route.save();

    return res.status(201).json(route);
  } catch (err) {
    if (!err.message) {
      return res.status(400).json({ message: err });
    } else {
      return res.status(400).json({
        message: "Error creating route."
      });
    }
  }
};

// ! improve - find nearby routes
routeCtrl.getPublicRoutes = async (req, res, next) => {
  try {

    console.log("LLEGA");
    const routes = await Route.find({public: true});

    return res.status(200).json(routes);
  } catch (err) {
    if (!err.message) {
      return res.status(400).json({ message: err });
    } else {
      return res.status(400).json({
        message: "Route search error."
      });
    }
  }
};

// ! improve grading method
routeCtrl.qualifyRoute = async (req, res, next) => {
  try {
    const { routeId, rating } = req.body;

    if (!routeId || !rating)
      throw "The required data is incomplete";

    if ((rating < 0) || (rating > 5))
      throw "The rating value is invalid ";

    var route = await Route.findById(routeId);
    route.rating += rating * (1 / route.memberId2s.length);

    await Route.findByIdAndUpdate(routeId, route);

    return res.status(200).json({
      message: "the route qualification has been successful."
    })
  } catch (err) {
    if (!err.message) {
      return res.status(400).json({ message: err });
    } else {
      return res.status(400).json({
        message: "An error occurred while rating the route."
      });
    }
  }
};

routeCtrl.addMember = async (req, res, next) => {
  try {
    const { routeId, id2 } = req.body;

    if (!routeId || !id2)
      throw "The required data is incomplete";

    var route = await Route.findById(routeId);
    if (route.memberId2s.includes(id2))
      return res.status(400).json({
        message: "You are already a member of this route."
      })

    route.memberId2s.push(id2);
    await Route.findByIdAndUpdate(routeId, route);

    return res.status(200).json({
      message: "You have successfully joined the route."
    })
  } catch (err) {
    if (!err.message) {
      return res.status(400).json({ message: err });
    } else {
      return res.status(400).json({
        message: "Path members update failed."
      });
    }
  }
};

routeCtrl.removeMember = async (req, res, next) => {
  try {
    const { routeId, id2 } = req.body;

    if (!routeId || !id2)
      throw "The required data is incomplete";

    var route = await Route.findById(routeId);
    const position = route.memberId2s.findIndex(el => el === id2);

    if (position < 0)
      return res.status(400).json({
        message: "The user is not a member of the route."
      })

    route.memberId2s.splice(position, 1);

    await Route.findByIdAndUpdate(routeId, route);

    return res.status(200).json({
      message: "The user has been successfully removed from the route."
    })
  } catch (err) {
    if (!err.message) {
      return res.status(400).json({ message: err });
    } else {
      return res.status(400).json({
        message: "Path members update failed."
      });
    }
  }
};

routeCtrl.deleteRoute = async (req, res, next) => {
  try {
    console.log(req.params);
    const { routeId } = req.body;

    if (!routeId)
      throw "The required data is incomplete";

    await Route.findByIdAndDelete(routeId);

    return res.status(200).json({
      message: "Route has been successfully removed"
    });
  } catch (err) {
    if (!err.message) {
      return res.status(400).json({ message: err });
    } else {
      return res.status(400).json({
        message: "The route does not exist",
      });
    }
  }
};

routeCtrl.getRoute = async (req, res, next) => {
  try {
    const { routeId } = req.body;

    if (!routeId)
      throw "The required data is incomplete";

    const route = await Route.findById(routeId);

    return res.status(200).json(route);
  } catch (err) {
    if (!err.message) {
      return res.status(400).json({ message: err });
    } else {
      return res.status(400).json({
        message: "The route does not exist",
      });
    }
  }
};

module.exports = routeCtrl;