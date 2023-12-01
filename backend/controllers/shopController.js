const Shop = require("../models/shopModel");
const verifyShopToken = require("../utils/jwtShop");
const jwt = require("jsonwebtoken");

// @desc   Register a new shop
// route   POST /api/v2/shop/register
// @access Public
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
      verifyShopToken(res, newShop._id);
      res.status(201).json({
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

// @desc   Login a seller
// route   POST /api/v2/shop/login
// @access Public

exports.shopLogin = async (req, res, next) => {
  const { email, password } = req.body;

  // Validate request
  try {
    if (!email || !password) {
      res.status(400);
      throw new Error("Please add email and password");
    }
  } catch (err) {
    return next(err);
  }

  // Check if user exists
  try {
    const shop = await Shop.findOne({ email });
    if (!shop) {
      res.status(404);
      throw new Error("User not found");
    }
    // Check password validity
    const isPasswordValid = await shop.comparePassword(password);

    if (!isPasswordValid) {
      res.status(400);
      throw new Error("Password is incorrect");
    }
    verifyShopToken(res, shop._id);
    res.status(200).json(shop);
  } catch (err) {
    return next(err);
  }
};

// @desc   Get shop Login Status
// route   GET /api/v2/shop/loggedin
// @access private

exports.loginStatus = async (req, res) => {
  const token = req.cookies.shop_token;

  if (!token) {
    return res.json(false);
  }

  // Verify token
  const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);

  if (verifiedToken) {
    return res.json(true);
  } else {
    return res.json(false);
  }
};

// @desc   Get a seller
// route   POST /api/v2/shop/get_seller
// @access Private

exports.getSeller = async (req, res, next) => {
  const { id } = req.params;

  try {
    if (id === req.seller._id.toString()) {
      const seller = await Shop.findById(id);
      res.status(200).json(seller);
    } else {
      res.status(401);
      throw new Error("User not authorized");
    }
  } catch (err) {
    return next(err);
  }
};
