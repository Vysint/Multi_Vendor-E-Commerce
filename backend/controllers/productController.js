const Product = require("../models/productModel");

// @desc   Create a product
// route   POST /api/v2/products/create-product
// @access Private
exports.createProduct = async (req, res, next) => {
  const {
    name,
    description,
    category,
    tags,
    originalPrice,
    discountPrice,
    quantity,
  } = req.body;

  // Validation
  try {
    if (
      !name ||
      !description ||
      !category ||
      !tags ||
      !originalPrice ||
      !discountPrice ||
      !quantity
    ) {
      res.status(400);
      throw new Error("Please fill in all the required fields");
    }
  } catch (err) {
    return next(err);
  }

  // Create a product
  try {
    const product = await Product.create({
      name,
      description,
      category,
      tags,
      originalPrice,
      discountPrice,
      quantity,
      images: req.query.images,
      shop: req.seller._id,
    });

    res.status(200).json(product);
  } catch (err) {
    return next(err);
  }
};
