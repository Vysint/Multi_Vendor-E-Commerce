import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { categoriesData } from "../../../../static/data";
import { toast } from "react-toastify";
import useCloudinaryImageUpload from "../../../hooks/imageCloudinary";
import { SpinnerImg } from "../../../loader/Loader";
import { useCreateEventMutation } from "../../../../features/api/eventApiSlice";
// import "./CreateProduct.scss";

const CreateEvent = () => {
  const [event, setEvent] = useState({
    name: "",
    description: "",
    category: "",
    tags: "",
    originalPrice: "",
    discountPrice: "",
    stock: "",
  });

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [loading, setLoading] = useState(false);

  const [images, setImages] = useState([]);
  const { uploadImage, uploading, error } = useCloudinaryImageUpload();
  const [createEvent] = useCreateEventMutation();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEvent((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleImageChange = (e) => {
    e.preventDefault();

    let files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  // Handle date changes

  const handleStartDateChange = (e) => {
    const start_date = new Date(e.target.value);
    const minEndDate = new Date(start_date.getTime() + 3 * 24 * 60 * 60 * 1000);
    setStartDate(start_date);
    document.getElementById("end-date").min = minEndDate.toISOString.slice(
      0,
      10
    );
  };

  // Handle end date change
  const handleEndDateChange = (e) => {
    setEndDate(new Date(e.target.value));
  };

  const today = new Date().toISOString().slice(0, 10);
  const minEndDate = startDate
    ? new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 10)
    : "";

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
      // After all images are uploaded, create the event

      if (allUploadsSuccessful) {
        const formData = {
          ...event,
          startDate,
          endDate,
          images: imageUrls,
        };

        await createEvent(formData).unwrap();
        // Navigate after successful product creation
        navigate("/dashboard-events");
      } else {
        toast.error(
          "Some image uploads failed. Please try again (PNG, JPEG or JPG types)."
        );
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
      <h5>Create an Event</h5>
      {/* Create an event form */}
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label>
            Name<span>*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your event name"
            value={event.name}
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
            value={event.description}
            onChange={handleInputChange}
            placeholder="Enter your event description..."
          ></textarea>
        </div>
        <br />
        <div>
          <label>
            Category<span>*</span>
          </label>
          <select
            name="category"
            value={event.category}
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
            value={event.tags}
            placeholder="Enter your event tags..."
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label>Original Price</label>
          <input
            type="number"
            name="originalPrice"
            value={event.originalPrice}
            onChange={handleInputChange}
            placeholder="Enter your event product price..."
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
            value={event.discountPrice}
            onChange={handleInputChange}
            placeholder="Enter your event product price with discount..."
          />
        </div>
        <br />
        <div>
          <label>
            Event Product Stock<span>*</span>
          </label>
          <input
            type="number"
            name="stock"
            value={event.stock}
            onChange={handleInputChange}
            placeholder="Enter your event product stock..."
          />
        </div>
        <br />
        <div>
          <label>Enter Start Date</label>
          <input
            type="date"
            name="startDate"
            onChange={handleStartDateChange}
            value={startDate ? startDate.toISOString().slice(0, 10) : ""}
            min={today}
            placeholder="Please enter your event start date..."
          />
        </div>
        <br />
        <div>
          <label>Enter End Date</label>
          <input
            type="date"
            name="endDate"
            id="end-date"
            min={minEndDate}
            value={endDate ? endDate.toISOString().slice(0, 10) : ""}
            onChange={handleEndDateChange}
            placeholder="Please enter your event end date..."
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

export default CreateEvent;
