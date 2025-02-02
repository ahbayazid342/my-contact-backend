const express = require("express");
const {
  userRegister,
  userLogin,
  currentUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.post("/currentUser", currentUser);

module.exports = router;
