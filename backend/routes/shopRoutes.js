const express = require("express");
const { registerShop, shopLogin } = require("../controllers/shopController");
const { fileUpload } = require("../utils/fileUpload");

const router = express.Router();

router.post("/register", fileUpload.single("file"), registerShop);

router.post("/login", shopLogin);

module.exports = router;
