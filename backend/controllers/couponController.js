const Coupon = require("../models/couponModel");

// @desc   Create a coupon code
// route   POST /api/v2/coupons/create-coupon
// @access Private
exports.createCoupon = async (req, res, next) => {
  try {
    const couponCodeExists = await Coupon.find({ name: req.body.name });

    if (couponCodeExists.length > 0) {
      res.status(400);
      throw new Error("Coupon code already exists");
    }

    const couponCode = await Coupon.create(req.body);
    res.status(201).json(couponCode);
  } catch (err) {
    return next(err);
  }
};
