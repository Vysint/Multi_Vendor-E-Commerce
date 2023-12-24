import { useState } from "react";
import { toast } from "react-toastify";

const useCloudinaryImageUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const uploadImage = async (image) => {
    try {
      let imageUrl;
      if (
        image &&
        (image.type === "image/jpeg" ||
          image.type === "image/png" ||
          image.type === "image/jpg")
      ) {
        setUploading(true);
        const formData = new FormData();
        formData.append("file", image);
        formData.append("cloud_name", "dk7mw2ypf");
        formData.append("upload_preset", "aqoxs4ms");

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dk7mw2ypf/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error("Image type not supported, upload png, jpeg, jpg");
        }

        const imgData = await response.json();
        imageUrl = imgData.secure_url;
      }
      setUploading(false);
      setError(null);
      return imageUrl;
    } catch (error) {
      setUploading(false);
      setError(error?.message);
      throw error;
    }
  };
  return { uploadImage, uploading, error };
};

export default useCloudinaryImageUpload;
