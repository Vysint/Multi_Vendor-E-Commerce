const Event = require("../models/eventModel");

const { deleteImageFromCloudinary } = require("../utils/cloudinary");

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

// @desc   Get all events for a given shop
// route   POST /api/v2/events
// @access Private

exports.getEvents = async (req, res, next) => {
  try {
    const events = await Event.find({ shop: req.seller._id }).sort(
      "-createdAt"
    );
    res.status(200).json(events);
  } catch (err) {
    return next(err);
  }
};
// @desc   Delete an event for a given shop
// route   POST /api/v2/events/:id
// @access Private

// exports.deleteEvent = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const event = await Event.findById(id);

//     if (!event) {
//       res.status(404);
//       throw new Error("Event not Found!");
//     }
//     // Check if shop is correct
//     if (event.shop.toString() !== req.seller.id) {
//       res.status(401);
//       throw new Error("User not authorized!");
//     }

//     // Delete images in cloudinary for the event
//     await Promise.all(
//       event.images.map(async (image) => {
//         await deleteImageFromCloudinary(image.public_id);
//       })
//     );

//     // Delete the event from the database
//     await event.deleteOne();
//     res.status(200).json({ message: "Event deleted successfully." });
//   } catch (err) {
//     return next(err);
//   }
// };
