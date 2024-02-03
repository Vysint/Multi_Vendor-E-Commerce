const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your event product name!"],
    },
    description: {
      type: String,
      required: [true, "Please enter your event product description!"],
    },
    category: {
      type: String,
      required: [true, "Please enter your event product category"],
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      default: "Running",
    },
    tags: {
      type: String,
    },
    originalPrice: {
      type: Number,
      required: [true, "Please enter your event product price!"],
    },
    discountPrice: {
      type: Number,
      required: [true, "Please enter you event product price!"],
    },
    stock: {
      type: Number,
      required: [true, "Please enter you event product stock!"],
    },
    images: [
      {
        public_id: {
          type: String,
        },
        secure_url: {
          type: String,
        },
      },
    ],
    shop: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop",
    },
    sold_out: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventSchema);
