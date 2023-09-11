import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { toast } from "react-toastify";
import Card from "../../components/card/Card";
import { useLoginMutation } from "../../features/slices/usersApiSlice";
import { SpinnerImg } from "../../components/loader/Loader";
import { setCredentials } from "../../features/slices/authSlice";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success("Login successful");
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error?.message);
    }
  };

  return (
    <div className="auth">
      {isLoading && <SpinnerImg />}
      <Card>
        <div className="form">
          <h2 className="title">Login</h2>
          <form className="form1" onSubmit={submitHandler}>
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
              <div className="checkbox">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link to="/forgotpassword" className="register">
                Forgot Password
              </Link>
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
            <span>Don&apos;t have an account?</span>
            <Link to="/register" className="register">
              &nbsp;SignUp
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
