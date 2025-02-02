const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name is required field"],
    },
    email: {
      type: String,
      require: [true, "email is required filed"],
      unique: [true, "This Email address already exist"],
    },
    email: {
      type: String,
      require: [true, "please add password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
