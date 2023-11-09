const express = require("express");
const { registerShop } = require("../controllers/shopController");
const { fileUpload } = require("../utils/fileUpload");

const router = express.Router();

router.post("/register", fileUpload.single("file"), registerShop);

module.exports = router;
