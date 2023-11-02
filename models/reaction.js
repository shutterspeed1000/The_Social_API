const { Schema, model } = require("mongoose");
const moment = require("moment");


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
      get: (value) =>
      moment(value).format("MMM DD, YYYY [at] hh:mm a"),
    },
  },

  {
    toJSON: {
      getters: true,
    },
    id: true,
  }

);


module.exports = reactionSchema;
