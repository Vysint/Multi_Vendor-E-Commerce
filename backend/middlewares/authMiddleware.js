const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

const protect = async (req, res, next) => {
  let token = req.cookies.jwt;

  try {
    if (token) {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Get user from the token
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } else {
      res.status(401);
      throw new Error("Not authorized, please login");
    }
  } catch (err) {
    return next(err);
  }
};

module.exports = protect;
