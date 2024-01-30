const cloudinary = require("cloudinary").v2;

// Utility function to delete an image by it's public_id;
async function deleteImageFromCloudinary(publicId) {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_KEY_SECRET,
  });

  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (err) {
    // Handle error
    console.error("Error deleting image from cloudinary:", err);
    throw new Error("Failed to delete image from cloudinary");
  }
}

module.exports = { deleteImageFromCloudinary };
