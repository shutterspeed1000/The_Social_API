const { Thought, User } = require('../models');

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


// add single user to system
      async addUser(req, res) {
        try {
          const user = await User.create(req.body);
          res.json(user);
        } catch (err) {
          res.status(500).json(err);
        }
      },




}