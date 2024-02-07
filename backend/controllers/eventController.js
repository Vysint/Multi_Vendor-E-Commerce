const { request } = require("express");
const Event = require("../models/eventModel");

// @desc   Create an event
// route   POST /api/v2/events/create-event
// @access Private

exports.createEvent = async (req, res, next) => {
  const {
    name,
    description,
    category,
    startDate,
    endDate,
    originalPrice,
    discountPrice,
    stock,
  } = req.body;

  try {
    if (
      !name ||
      !description ||
      !category ||
      !startDate ||
      !endDate ||
      !originalPrice ||
      !discountPrice ||
      !stock
    ) {
      res.status(500).json("Please fill all the required fields");
    }
  } catch (err) {
    return next(err);
  }

  // Create an event
  try {
    const event = await Event.create({
      name,
      description,
      category,
      originalPrice,
      discountPrice,
      stock,
      startDate,
      endDate,
      shop: req.seller._id,
      images: req.body.images,
    });
    if (event) {
      res.status(201).json(event);
    } else {
      throw new Error("Failed to create an event, please try again");
    }
  } catch (err) {
    return next(err);
  }
};
