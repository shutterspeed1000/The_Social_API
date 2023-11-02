const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const moment = require("moment");


// create schema for user info

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlenght: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (value) =>
      moment(value).format("MMM DD, YYYY [at] hh:mm a"),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },

  {
    toJSON: {
      getters: true,
    },
    id: true,
  }
);

const Thought = model("thoughts", thoughtSchema);
module.exports = Thought;
