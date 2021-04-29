const User = require("../models/User");

const userCtrl = {};

userCtrl.userExists = async (req, res, next) => {
  try {
    const { id2 } = req.body;
    if (!id2)
      throw "The required data is incomplete";

    // * if user exists -> next() -> create new User
    await User.findOne({"id2": id2}, function (error, docs) {
      if(docs == null)
        return next();
      else
        return res.status(400).json({
          message: "The user already exists"
        });
    });

  } catch (err) {
    if (!err.message) {
      return res.status(400).json({ message: err });
    } else {
      return res.status(400).json({
        message: "Error creating user"
      });
    }
  }
};

userCtrl.addUser = async (req, res, next) => {
  try {
    const { id2, name } = req.body;
    if (!id2 || !name)
      throw "The required data is incomplete";

    const user = new User(req.body);
    await user.save();

    return res.status(201).json({
      message: "The user was created successfully"
    });
  } catch (err) {
    if (!err.message) {
      return res.status(400).json({ message: err });
    } else {
      return res.status(400).json({
        message: "Error creating user "
      });
    }
  }
};

userCtrl.updateUser =  async (req, res, next) => {
  try {
    const { id2, name } = req.body;

    if (!id2 || !name)
      throw "The required data is incomplete";

    var user = await User.findOne({"id2": id2});
    user.name = name;
    await User.findOneAndUpdate({"id2":id2}, user);

    return res.status(200).json({
      message: "The user has been updated successfully",
    });
  } catch (err) {
    if (!err.message) {
      return res.status(400).json({ message: err });
    } else {
      return res.status(400).json({
        message: "The user does not exist",
      });
    }
  }
};

userCtrl.deleteUser = async (req, res, next) => {
  try {
    const { id2 } = req.body;

    if (!id2)
      throw "The required data is incomplete";

    await User.findOneAndDelete({"id2": id2});

    return res.status(200).json({
      message: "User has been successfully removed"
    });
  } catch (err) {
    if (!err.message) {
      return res.status(400).json({ message: err });
    } else {
      return res.status(400).json({
        message: "The user does not exist",
      });
    }
  }
};

userCtrl.getUser = async (req, res, next) => {
  try {
    const { id2 } = req.body;

    if (!id2)
      throw "The required data is incomplete";

    const user = await User.findOne({"id2": id2});

    return res.status(200).json(user);
  } catch (err) {
    if (!err.message) {
      return res.status(400).json({ message: err });
    } else {
      return res.status(400).json({
        message: "The user does not exist",
      });
    }
  }
};

module.exports = userCtrl;
