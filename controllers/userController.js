const ayncHandler = require("express-async-handler");
const bcryprt = require("bcrypt");
const User = require("../models/userModel");

const userRegister = ayncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Field is required");
  }

  const userAvailable = await User.findOne({ email });

  if (userAvailable) {
    res.status(400).json({ message: "User already registered" });
  }

  const hashPassword = await bcryprt.hash(password, 10);

  const user = User.create({
    name,
    email,
    password: hashPassword,
  });

  if (user) {
    res.status(200).json({
      _id: user.id,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("User Data Is Not Valid");
  }
});

const userLogin = ayncHandler(async (req, res) => {
  res.status(200).json("Login Successful");
});

const currentUser = ayncHandler(async (req, res) => {
  res.status(200).json("Current User work");
});

module.exports = { userRegister, userLogin, currentUser };
