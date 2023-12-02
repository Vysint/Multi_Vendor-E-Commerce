import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { SpinnerImg } from "../../loader/Loader";
import { useShopLoginMutation } from "../../../features/api/shopApiSlice";
import { toast } from "react-toastify";
import { setShopCredentials } from "../../../features/slices/shopSlice";

const ShopLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const { shopInfo } = useSelector((state) => state.shop);

  const navigate = useNavigate();

  const [shopLogin, { isLoading }] = useShopLoginMutation();

  useEffect(() => {
    if (shopInfo) {
      navigate("/dashboard");
    }
  }, [navigate, shopInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await shopLogin({ email, password }).unwrap();
      dispatch(setShopCredentials(res));

      navigate(`/dashboard`);
    } catch (err) {
      toast.error(err?.data?.message || err.error?.message);
    }
  };

  return (
    <div className="auth">
      {isLoading && <SpinnerImg />}

      <div className="form">
        <h2>Login to your shop</h2>
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
          <div className="options_login">
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
          <Link to="/create-shop" className="register">
            &nbsp;Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopLogin;
