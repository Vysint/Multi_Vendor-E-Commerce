const jwt = require("jsonwebtoken");

const verifyShopToken = (res, shopId) => {
  const shop_token = jwt.sign({ shopId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("shop_token", shop_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 24 * 60 * 60 * 1000 , //milliseconds for 1day
  });
};

module.exports = verifyShopToken;
