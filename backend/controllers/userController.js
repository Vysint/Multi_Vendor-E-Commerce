const User = require("../models/userModel");

// @desc   Register a new user
// route   POST /api/users/register
// @access Public
exports.registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;

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

  // Create a user
  try {
    const newUser = await User.create({
      name,
      email,
      password,
    });
    if (newUser) {
      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        avatar: newUser.avatar,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  } catch (err) {
    return next(err);
  }
};
