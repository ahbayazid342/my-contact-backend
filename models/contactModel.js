const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: "Name Field Is Required",
    },
    email: {
      type: String,
      require: "Email Field Is Required",
    },
    phone: {
      type: String,
      require: "Phone Field Is Required",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
