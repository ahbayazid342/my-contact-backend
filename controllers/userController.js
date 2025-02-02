const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const userRegister = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Field is required");
  }

  const userAvailable = await User.findOne({ email });

  if (userAvailable) {
    return res.status(400).json({ message: "User already registered" });
  }

  const hashPassword = await bcryprt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashPassword,
  });

  if (user) {
    res.status(200).json("Registration Successful");
  } else {
    res.status(400);
    throw new Error("User Data Is Not Valid");
  }
});

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("Please create account first");
  }

  const checkPassword = await bcrypt.compare(password, user.password);

  if (checkPassword) {
    res.status(200).json("Login Successful");
  } else {
    res.status(400);
    throw new Error("Password not correct");
  }
});

const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json("Current User work");
});

module.exports = { userRegister, userLogin, currentUser };
