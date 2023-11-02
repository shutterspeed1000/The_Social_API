const { Thought, User } = require("../models");

module.exports = {
  // Get list of all users
  async getUsers(req, res) {
    try {
      const user = await User.find();
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get single user by ID

  async getUserID(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userID })
      .select('-__v')
       .populate('friends')
       .populate('thoughts');
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // add single user to system
  async addUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // delete user by ID
  async delUserID(req, res) {
    try {
      const user = await User.deleteOne({ _id: req.params.userID });
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // update user by ID
  async putUserID(req, res) {
    try {
      const user = await User.updateOne(
        { _id: req.params.userID },
        { $set: req.body }
      );
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // add friend to a user

  async addFriend(req, res) {
    try {
      const user = await User.updateOne(
        { _id: req.params.userID },
        { $push: { friends: { _id: req.params.friendID } } }
      );
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // delete friend

  async delFriend(req, res) {
    try {
      const user = await User.updateOne(
        { _id: req.params.userID },
        { $pull: { friends: { _id: req.params.friendID } } }
      );
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },



};
