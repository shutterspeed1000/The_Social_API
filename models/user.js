const { Schema, model } = require("mongoose");
const Thought = require("./Thought");

// create schema for user info

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+\@.+\..+/, "Please provide a valid email"],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thoughts",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    ],
  },

  {
    toJSON: {
      virtuals: true,
    },
    id: true,
  }
);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("users", userSchema);
module.exports = User;
