
const { Thought, User } = require("../models");

module.exports = {

  // Get list of all users
  async getThoughts(req, res) {
    try {
      const thought = await Thought.find();
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get single thought by ID

  async getThoughtID(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtID })
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

//   // add single thought to system
  async addThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // delete thought by ID
  async delThoughtID(req, res) {
    try {
      const thought = await Thought.deleteOne({ _id: req.params.thoughtID });
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // update user by ID
  async putThoughtID(req, res) {
    try {
      const user = await Thought.updateOne(
        { _id: req.params.thoughtID },
        { $set: req.body }
      );
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

//   // add friend to a user

//   async addFriend(req, res) {
//     try {
//       const user = await User.updateOne(
//         { _id: req.params.userID },
//         { $push: { friends: { _id: req.params.friendID } } }
//       );
//       res.json(user);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },

//   // delete friend

//   async delFriend(req, res) {
//     try {
//       const user = await User.updateOne(
//         { _id: req.params.userID },
//         { $pull: { friends: { _id: req.params.friendID } } }
//       );
//       res.json(user);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },



};


