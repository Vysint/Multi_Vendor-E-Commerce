const express = require("express");
const {
  registerShop,
  shopLogin,
  getSeller,
} = require("../controllers/shopController");
const { fileUpload } = require("../utils/fileUpload");
const protectShop = require("../middlewares/shopMiddleware");

const router = express.Router();

router.post("/register", fileUpload.single("file"), registerShop);

router.post("/login", shopLogin);

router.get("/:id", protectShop, getSeller);

module.exports = router;
