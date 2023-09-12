const crypto = require("crypto");
const User = require("../models/userModel");
const Token = require("../models/tokenModel");
const verifyToken = require("../utils/jwt");
const cloudinary = require("../utils/cloudinary");
const { fileSizeFormatter } = require("../utils/fileUpload");
const sendMail = require("../utils/sendMail");

// @desc   Register a new user
// route   POST /api/v2/users/register
// @access Public
exports.registerUser = async (req, res, next) => {
  const { name, email, password, imageURL } = req.body;

  // Validation
  try {
    if (!name || !email || !password || !imageURL) {
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
      imageURL,
    });
    if (newUser) {
      verifyToken(res, newUser._id);
      res.status(201).json(newUser);
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  } catch (err) {
    return next(err);
  }
};

// @desc   Login a  user
// route   POST /api/v2/users/login
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
    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      res.status(400);
      throw new Error("Password is incorrect");
    }
    verifyToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      imageURL: user.imageURL,
    });
  } catch (err) {
    return next(err);
  }
};

// @desc   Logout a user
// route   POST /api/v2/users/logout
// @access Public

exports.logout = async (req, res, next) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
};

// @desc   GET user profile
// route   GET /api/v2/users/profile
// @access private

exports.getUserProfile = async (req, res, next) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };
  res.status(200).json(user);
};

// @desc   Forgot Password
// route   POST /api/v2/users/forgotpassword
// @access public

exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      // Delete token if it exists in the database
      try {
        let token = await Token.findOne({ userId: user._id });
        if (token) {
          await token.deleteOne();
        }
      } catch (err) {
        res.status(400);
        throw new Error(err);
      }

      // Create a reset token
      let resetToken = crypto.randomBytes(32).toString("hex") + user._id;

      // Hash token before saving to the database
      const hashedToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

      // Save to the database
      await new Token({
        userId: user._id,
        token: hashedToken,
        createdAt: Date.now(),
        expiresAt: Date.now() + 30 * (60 * 1000), //30 minutes
      }).save();

      // Construct the Reset Url
      const resetUrl = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;

      console.log(resetToken);

      // Reset Password Email
      const message = `
      <h2>Hello ${user.name}</h2>
      <p>You requested for a password reset</p>
      <p>Please use the link below to reset your password</p>
      <p>This reset link is valid for 30 minutes</p>
      <a href=${resetUrl} clicktracking=off>${resetUrl}</a>   
      
      <p>Regards</p>
      <p>Team</p>
      `;

      // Email options
      const subject = "Password Reset Request";
      const send_to = user.email;
      const sent_from = process.env.EMAIL_USER;

      try {
        await sendMail(subject, message, send_to, sent_from);
        res.status(200).json({ success: true, message: "Reset email sent, kindly check your email" });
      } catch (err) {
        res.status(400);
        throw new Error("Email not sent,please try again");
      }
    } else {
      res.status(400);
      throw new Error("User not found");
    }
  } catch (err) {
    return next(err);
  }
};

// @desc   Reset Password
// route   POST /api/v2/users/resetpassword/:resetToken
// @access public

exports.resetPassword = async (req, res, next) => {
  const { password } = req.body;
  const { resetToken } = req.params;

  // Hash token, then compare to token in DB

  const hashedToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  //  Find the token in the database
  try {
    const userToken = await Token.findOne({
      token: hashedToken,
      expiresAt: { $gt: Date.now() },
    });
    if (userToken) {
      //Find user
      const user = await User.findOne({ _id: userToken.userId });
      user.password = password;
      await user.save();
      res
        .status(200)
        .json({ message: "Password reset successful, please login" });
    } else {
      res.status(400);
      throw new Error("Invalid or expired token");
    }
  } catch (err) {
    return next(err);
  }
};
