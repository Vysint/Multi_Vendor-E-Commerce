const Coupon = require("../models/couponModel");

// @desc   Create a coupon code
// route   POST /api/v2/coupons/create-coupon
// @access Private
exports.createCoupon = async (req, res, next) => {
  try {
    const couponCode = await Coupon.find({ name: req.body.name });

    if (couponCode) {
      res.status(400);
      throw new Error("Coupon code already exists");
    }
  } catch (err) {
    return next(err);
  }
};
