const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/userController");
// const fileUpload = require("../utils/fileUpload");


// fileUpload.single("file")

router.post("/register", registerUser);

module.exports = router;
