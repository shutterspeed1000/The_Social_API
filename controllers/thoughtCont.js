const { Thought, User, Reaction } = require("../models");

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
      const thought = await Thought.findOne({ _id: req.params.thoughtID });
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

  // update thought by ID
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

  // add reaction to thought
  async putReact(req, res) {
    try {
      const thought = await Thought.updateOne(
        { _id: req.params.thoughtID },
        { $push: { reactions: req.body } }
      );
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // delete reaction
  async delReact(req, res) {
    try {
      const thought = await Thought.updateOne(
        { _id: req.params.thoughtID },
        { $pull: { reactions: { _id: req.params.thoughtID } } }
      );
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
