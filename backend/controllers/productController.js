const Product = require("../models/productModel");
const deleteImage = require("../utils/cloudinary");

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
      images: req.body.images,
      shop: req.seller._id,
    });

    res.status(201).json(product);
  } catch (err) {
    return next(err);
  }
};

// @desc   Get all products of a shop
// route   POST /api/v2/products
// @access Private

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({ shop: req.seller._id }).sort(
      "-createdAt"
    );
    res.status(200).json(products);
  } catch (err) {
    return next(err);
  }
};

// @desc   Delete a products
// route   POST /api/v2/products/:id
// @access Private
exports.deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.status(400);
      throw new Error("Product not found");
    }
    if (product.shop.toString() !== req.seller._id) {
      res.status(401);
      throw new Error("User not authorized");
    }
    await deleteImage(product.images[0].public_id);
    await product.deleteOne();
  } catch (err) {}
};
