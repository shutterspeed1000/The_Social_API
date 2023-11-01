const { Schema, model } = require("mongoose");
// const Reaction = require("./Reaction");

// create schema for user info

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },

  {
    toJSON: {
      // getters: true,
    },
    id: false,
  } //configuration object that specifies how to convert the document to a JSON object.
);

const Reaction = model("reaction", reactionSchema);
module.exports = Reaction;
