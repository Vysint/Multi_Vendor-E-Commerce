const router = require("express").Router();
const {
  createProduct,
  getProducts,
} = require("../controllers/productController");
const protectShop = require("../middlewares/shopMiddleware");

router.get("/", protectShop, getProducts);
router.post("/create-product", protectShop, createProduct);
module.exports = router;
