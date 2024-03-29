const jwt = require("jsonwebtoken");

const Shop = require("../models/shopModel");

const protectShop = async (req, res, next) => {
  let token = req.cookies.shop_token;

  try {
    if (token) {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Check if the token is expired
      if (decoded.exp < Date.now() / 1000) {
        res.status(401);
        throw new Error("Token has expired, please login again");
      }
      // Get user from the token
      req.seller = await Shop.findById(decoded.shopId).select("-password");
      next();
    } else {
      res.status(401);
      throw new Error("Not authorized, please login");
    }
  } catch (err) {
    return next(err);
  }
};

module.exports = protectShop;
