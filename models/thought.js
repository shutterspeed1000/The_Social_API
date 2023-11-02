const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");


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
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },

  {
    toJSON: {
      // virtuals: true,
    },
    id: true,
  }
);

const Thought = model("thoughts", thoughtSchema);
module.exports = Thought;
