const router = require("express").Router();
const { createProduct } = require("../controllers/productController");




router.post("/create-product", createProduct);
module.exports = router;
