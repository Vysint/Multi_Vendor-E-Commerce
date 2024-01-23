import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { useSignUpMutation } from "../../features/api/usersApiSlice";
import { setCredentials } from "../../features/slices/authSlice";
import { SpinnerImg } from "../../components/loader/Loader";
import useCloudinaryImageUpload from "../../components/hooks/imageCloudinary";
import "./Login.scss";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [signUp] = useSignUpMutation();

  const { uploadImage, uploading, error } = useCloudinaryImageUpload();

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
      setLoading(true);
      // Handle image upload
      let imageURL = await uploadImage(profileImage);

      if (imageURL) {
        const formData = {
          name,
          email,
          password,
          imageURL,
        };
        // Save the user
        const res = await signUp(formData).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate("/");
        toast.success("Sign up is successful");
      } else {
        toast.error(error);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      toast.error(err?.data?.message || err?.error?.message);
    }
  };

  return (
    <div className="auth">
      {(loading || uploading) && <SpinnerImg />}
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
          <div className="options">
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
    </div>
  );
};

export default Register;
