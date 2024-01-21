const router = require("express").Router();
const { createProduct } = require("../controllers/productController");
const protectShop = require("../middlewares/shopMiddleware");

router.post("/create-product", protectShop, createProduct);
module.exports = router;
