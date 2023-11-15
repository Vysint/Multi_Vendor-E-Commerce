const jwt = require("jsonwebtoken");

const verifyShopToken = (res, shopId) => {
  const token = jwt.sign({ shopId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("shop_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 24 * 60 * 60, //Seconds for 1day
  });
};

module.exports = verifyShopToken;
