import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { RxAvatar } from "react-icons/rx";
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
  // const [avatar, setAvatar] = useState(null);

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [signUp, { isLoading }] = useSignUpMutation();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  // const handleFileInputChange = (e) => {
  //   const file = e.target.files[0];
  //   setAvatar(file);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signUp({name, email, password}).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err?.message || err?.error);
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
            {/* <div className="option">
              <label htmlFor="file-input"></label>
              <div className="items-center">
                <span className="inline">
                  {avatar ? (
                    <img src={URL.createObjectURL(avatar)} />
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
                      onChange={handleFileInputChange}
                      className="sr-only"
                    />
                    <button>Upload a file</button>
                  </div>
                </label>
              </div>
            </div> */}
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
