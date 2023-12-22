import { useState } from "react";
import { toast } from "react-toastify";

const useCloudinaryImageUpload = () => {
  const [uploading, setUploading] = useState(false);

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

        const imgData = await response.json();
        imageUrl = imgData.secure_url;
      }
      setUploading(false);
      return imageUrl;
    } catch (err) {
      setUploading(false);
      toast.error(err?.message || "Image upload failed");
    }
  };
  return { uploadImage, uploading };
};

export default useCloudinaryImageUpload;
