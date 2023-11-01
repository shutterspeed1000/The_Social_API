const { Schema, model } = require("mongoose");
const Reaction = require("./Reaction");


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
    reactions: [Reaction],
  },

  {
    toJSON: {
      // virtuals: true,
    },
    id: false,
  }
);

const Thought = model("thought", thoughtSchema);
module.exports = Thought;
