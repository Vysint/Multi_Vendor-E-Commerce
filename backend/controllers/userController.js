const User = require("../models/userModel");
const verifyToken = require("../utils/jwt");
const cloudinary = require("../utils/cloudinary");
const { fileSizeFormatter } = require("../utils/fileUpload");

// @desc   Register a new user
// route   POST /api/users/register
// @access Public
exports.registerUser = async (req, res, next) => {
  const { name, email, password, imageURL } = req.body;

  // Validation
  try {
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please fill in all the required fields");
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

  // Check if user email is already registered
  let existingUser;

  try {
    existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(401);
      throw new Error("Email already registered");
    }
  } catch (err) {
    return next(err);
  }

  // Create a new user
  try {
    const newUser = await User.create({
      name,
      email,
      password,
      imageURL
    });
    if (newUser) {
      verifyToken(res, newUser._id);
      res.status(201).json({
        user: newUser,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  } catch (err) {
    return next(err);
  }
};

// @desc   Login a  user
// route   POST /api/users/login
// @access Public

exports.login = async (req, res, next) => {
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
    const user = await User.findOne({ email });
    if (user && (await user.comparePassword(password))) {
      verifyToken(res, user._id);
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar.url,
      });
    } else {
      res.status(400);
      throw new Error("User not found, please register instead.");
    }
  } catch (err) {
    return next(err);
  }
};
