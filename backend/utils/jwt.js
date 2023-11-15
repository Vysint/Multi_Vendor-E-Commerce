const jwt = require("jsonwebtoken");

const verifyToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    expiresIn: 24 * 60 * 60, //Seconds for 1 day
  });
};
module.exports = verifyToken;
