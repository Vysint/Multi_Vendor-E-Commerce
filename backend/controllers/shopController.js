// @desc   Register a new shop
// route   POST /api/v2/shop/register
// @access Public

const Shop = require("../models/shopModel");
const verifyToken = require("../utils/jwt");

exports.registerShop = async (req, res, next) => {
  const { email, password } = req.body;

  // Validation

  try {
    if (!email) {
      res.status(400);
      throw new Error("Please enter a valid email");
    }
  } catch (err) {
    return next(err);
  }

  // Check password length

  try {
    if (password.length < 6) {
      res.status(400);
      throw new Error("Password must be at least 6 characters");
    }
  } catch (err) {
    return next(err);
  }

  // Check if shop already exists

  let existingShop;

  try {
    existingShop = await Shop.findOne({ email });

    if (existingShop) {
      res.status(401);
      throw new Error("Shop already exists");
    }
  } catch (err) {
    return next(err);
  }

  // Create a new seller shop

  try {
    const newShop = await Shop.create({
      name: req.body.name,
      email: email,
      password: password,
      avatar: req.body.avatar,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      zipCode: req.body.zipCode,
    });
    if (newShop) {
      verifyToken(res, newShop._id);
      res
        .status(201)
        .json({
          _id: newShop._id,
          email: newShop.email,
          avatar: newShop.avatar,
          address: newShop.address,
          phoneNumber: newShop.phoneNumber,
          zipCode: newShop.zipCode,
        });
    } else {
      res.status(401);
      throw new Error("Invalid user data.");
    }
  } catch (err) {
    return next(err);
  }
};
