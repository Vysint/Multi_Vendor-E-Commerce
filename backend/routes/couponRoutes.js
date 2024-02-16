const router = require("express").Router();
const { createCoupon } = require("../controllers/couponController");
const protectShop = require("../middlewares/shopMiddleware");

router.post("/create-coupon", protectShop, createCoupon);

module.exports = router;
