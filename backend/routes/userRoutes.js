const express = require("express");
const router = express.Router();
const {
  registerUser,
  login,
  logout,
  getUserProfile,
  forgotPassword,
} = require("../controllers/userController");
const { fileUpload } = require("../utils/fileUpload");
const protect = require("../middlewares/authMiddleware");

router.post("/register", fileUpload.single("file"), registerUser);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", protect, getUserProfile);
router.post("/forgotpassword", forgotPassword);

module.exports = router;
