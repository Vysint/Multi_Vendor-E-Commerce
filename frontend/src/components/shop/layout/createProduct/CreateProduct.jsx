import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { categoriesData } from "../../../../static/data";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "./CreateProduct.scss";

const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    tags: "",
    originalPrice: 0,
    discountPrice: 0,
    quantity: 0,
  });

  const [images, setImages] = useState([]);
  const { shopInfo } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleImageChange = (e) => {
    e.preventDefault();

    let files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="create_product_container">
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
            {categoriesData.map((i) => (
              <option key={i.title} value={i.title}>
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
            Upload Images<span>*</span>
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
              images.map((i) => (
                <img src={URL.createObjectURL(i)} key={i} alt="" />
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
