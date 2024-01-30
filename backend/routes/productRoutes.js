const router = require("express").Router();
const {
  createProduct,
  getProducts,
  deleteProduct,
} = require("../controllers/productController");
const protectShop = require("../middlewares/shopMiddleware");

router.get("/", protectShop, getProducts);
router.post("/create-product", protectShop, createProduct);

router.delete("/:id", protectShop, deleteProduct);
module.exports = router;
