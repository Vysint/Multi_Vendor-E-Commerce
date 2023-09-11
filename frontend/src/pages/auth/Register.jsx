import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { useSignUpMutation } from "../../features/slices/usersApiSlice";
import { setCredentials } from "../../features/slices/authSlice";
import Card from "../../components/card/Card";
import { SpinnerImg } from "../../components/loader/Loader";
import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [signUp, { isLoading }] = useSignUpMutation();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Handle image upload
      let imageURL;
      if (
        profileImage &&
        (profileImage.type === "image/jpeg" ||
          profileImage.type === "image/jpg" ||
          profileImage.type === "image/png")
      ) {
        const image = new FormData();
        image.append("file", profileImage);
        image.append("cloud_name", "dk7mw2ypf");
        image.append("upload_preset", "aqoxs4ms");

        // Save image to cloudinary
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
        name,
        email,
        password,
        imageURL,
      };
      const res = await signUp(formData).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
      toast.success("Sign up is successful");
    } catch (err) {
      toast.error(err?.data?.message || err?.error?.message);
    }
  };

  return (
    <div className="auth">
      {isLoading && <SpinnerImg />}
      <Card>
        <div className="form">
          <h2 className="title">Register</h2>
          <form className="form1" onSubmit={handleSubmit}>
            <div className="inputs">
              <label> Full Name</label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="inputs">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            <div className="option">
              <label htmlFor="file-input"></label>
              <div className="items-center">
                <span className="inline">
                  {profileImage ? (
                    <img src={URL.createObjectURL(profileImage)} />
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
            <Link to="/login" className="register">
              &nbsp;Sign In
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
