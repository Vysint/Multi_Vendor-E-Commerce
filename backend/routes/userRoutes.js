const express = require("express");
const router = express.Router();
const { registerUser, login } = require("../controllers/userController");
const { fileUpload } = require("../utils/fileUpload");

router.post("/register", fileUpload.single("file"), registerUser);
router.post("/login", login);

module.exports = router;
