import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SpinnerImg } from "../../loader/Loader";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { toast } from "react-toastify";
import { useRegisterShopMutation } from "../../../features/api/shopApiSlice";
import {
  setLogin,
  setShopCredentials,
} from "../../../features/slices/shopSlice";
import { useDispatch, useSelector } from "react-redux";

const ShopRegister = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    avatar: "",
  });

  const [visible, setVisible] = useState(false);
  const [registerShop, { isLoading }] = useRegisterShopMutation();
  const dispatch = useDispatch();
  const { isSeller } = useSelector((state) => state.shop);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSeller === true) {
      navigate(`/dashboard`);
    }
  }, [navigate, isSeller]);

  const handleInputChange = (e) => {
    setUserData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleImageChange = (e) => {
    setUserData((prev) => {
      return { ...prev, avatar: e.target.files[0] };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Handle image upload
    try {
      let imageURL;
      if (
        userData.avatar &&
        (userData.avatar.type === "image/jpeg" ||
          userData.avatar.type === "image/jpg" ||
          userData.avatar.type === "image/png")
      ) {
        const image = new FormData();
        image.append("file", userData.avatar);
        image.append("cloud_name", "dk7mw2ypf");
        image.append("upload_preset", "aqoxs4ms");

        // Save to cloudinary
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dk7mw2ypf/image/upload",
          {
            method: "POST",
            body: image,
          }
        );

        const imgData = await response.json();
        imageURL = imgData.secure_url;
      }

      // Save the user
      const formData = {
        ...userData,
        avatar: imageURL,
      };
      const res = await registerShop(formData).unwrap();
      dispatch(setShopCredentials(res));
      dispatch(setLogin(true));
      navigate(`/dashboard`);
      // dispatch(setSellerCredentials(userData.name)); //
    } catch (err) {
      toast.error(err?.data?.message || err.error?.message);
    }
  };

  return (
    <div className="auth">
      {isLoading && <SpinnerImg />}
      <div className="form">
        <h2 className="title">Register your shop</h2>
        <form className="form1" onSubmit={handleSubmit}>
          <div className="inputs">
            <label> Full Name</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="inputs">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="inputs">
            <label>Password</label>
            <div className="passwordInput">
              <input
                type={visible ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
                required
              />
              <span className="eye" onClick={() => setVisible(!visible)}>
                {visible ? (
                  <AiOutlineEye size={25} />
                ) : (
                  <AiOutlineEyeInvisible size={25} />
                )}
              </span>
            </div>
          </div>
          <div className="inputs">
            <label>Phone Number</label>
            <input
              type="number"
              placeholder="Phone Number"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="inputs">
            <label>Address</label>
            <input
              type="number"
              placeholder="Address"
              name="address"
              value={userData.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="inputs">
            <label>Zip Code</label>
            <input
              type="number"
              placeholder="Zip Code"
              name="zipCode"
              value={userData.zipCode}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="options">
            <label htmlFor="file-input"></label>
            <div className="items-center">
              <span className="inline">
                {userData.avatar ? (
                  <img src={URL.createObjectURL(userData.avatar)} />
                ) : (
                  <RxAvatar size={25} />
                )}
              </span>
              <label htmlFor="file-input">
                <div className="file-upload">
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    onChange={handleImageChange}
                    className="sr-only"
                  />
                  <button>Upload a file</button>
                </div>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="--btn --btn-primary --btn-block"
            style={{ marginBottom: "1rem" }}
          >
            Submit
          </button>
        </form>
        <div style={{ marginBottom: "1rem" }}>
          <span>Already have an account?</span>
          <Link to="/shop-login" className="register">
            &nbsp;Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopRegister;
