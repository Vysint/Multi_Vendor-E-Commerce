import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { categoriesData } from "../../../../static/data";
import { toast } from "react-toastify";
import useCloudinaryImageUpload from "../../../hooks/imageCloudinary";
import "./CreateProduct.scss";
import { useCreateProductMutation } from "../../../../features/api/productApiSlice";
import { SpinnerImg } from "../../../loader/Loader";

const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    tags: "",
    originalPrice: "",
    discountPrice: "",
    quantity: "",
  });

  const [loading, setLoading] = useState(false);

  const [images, setImages] = useState([]);
  const { uploadImage, uploading, error } = useCloudinaryImageUpload();
  const [createProduct] = useCreateProductMutation();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleImageChange = (e) => {
    e.preventDefault();

    let files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      let imageUrls = [];
      let allUploadsSuccessful = true;

      await Promise.all(
        images.map(async (image) => {
          try {
            const imgURL = await uploadImage(image);
            if (imgURL) {
              imageUrls.push(imgURL);
            } else {
              allUploadsSuccessful = false;
              toast.error(error);
            }
          } catch (uploadError) {
            allUploadsSuccessful = false;
            toast.error(uploadError.message);
          }
        })
      );
      // After all images are uploaded, create the product

      if (allUploadsSuccessful) {
        const formData = {
          ...product,
          images: imageUrls,
        };

        await createProduct(formData).unwrap();
        // Navigate after successful product creation
        navigate("/dashboard");
      } else {
        toast.error("Some image uploads failed. Please try again (PNG, JPEG or JPG types).");
      }
    } catch (err) {
      setLoading(false);
      toast.error(err?.data?.message || err?.error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create_product_container">
      {(loading || uploading) && <SpinnerImg />}
      <h5>Create Product</h5>
      {/* Create a product form */}
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label>
            Name<span>*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={product.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <br />
        <div>
          <label>
            Description<span>*</span>
          </label>
          <textarea
            cols="30"
            required
            rows="8"
            type="text"
            name="description"
            value={product.description}
            onChange={handleInputChange}
            placeholder="Enter your product description..."
          ></textarea>
        </div>
        <br />
        <div>
          <label>
            Category<span>*</span>
          </label>
          <select
            name="category"
            value={product.category}
            onChange={handleInputChange}
            required
          >
            <option value="Choose a Category">Choose a Category</option>
            {categoriesData.map((i, index) => (
              <option key={index} value={i.title}>
                {i.title}
              </option>
            ))}
          </select>
        </div>
        <br />
        <div>
          <label>Tags</label>
          <input
            type="text"
            name="tags"
            value={product.tags}
            placeholder="Enter your product tags..."
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label>Original Price</label>
          <input
            type="number"
            name="originalPrice"
            value={product.originalPrice}
            onChange={handleInputChange}
            placeholder="Enter your product price..."
          />
        </div>
        <br />
        <div>
          <label>
            Price (With Discount)<span>*</span>
          </label>
          <input
            type="number"
            name="discountPrice"
            value={product.discountPrice}
            onChange={handleInputChange}
            placeholder="Enter your product price with discount..."
          />
        </div>
        <br />
        <div>
          <label>
            Product Stock<span>*</span>
          </label>
          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleInputChange}
            placeholder="Enter your product quantity..."
          />
        </div>
        <br />
        <div>
          <label>
            Upload Images<span>*</span> (PNG, JPEG or JPG)
          </label>
          <input
            className="input_file"
            type="file"
            name="images"
            id="upload"
            multiple
            onChange={handleImageChange}
          />
          <div className="image_uploader">
            <label htmlFor="upload">
              <AiOutlinePlusCircle
                size={30}
                color="#555"
                style={{ background: "#fff" }}
              />
            </label>
            {images &&
              images.map((i, index) => (
                <img src={URL.createObjectURL(i)} key={index} alt="" />
              ))}
          </div>
          <br />
          <div>
            <input type="submit" value="Create" className="--btn" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
