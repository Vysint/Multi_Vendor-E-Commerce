const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_KEY_SECRET,
});

// Utility function to delete an image by it's public_id;
const deleteImage = async (public_id) => {
  try {
    const result = await cloudinary.uploader.destroy(public_id);
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = deleteImage;
