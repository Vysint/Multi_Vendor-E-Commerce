import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { SpinnerImg } from "../../components/loader/Loader";
import { useForgotPasswordMutation } from "../../features/api/usersApiSlice";
import { validateEmail } from "../../components/validate/validateEmail";
import "./Login.scss";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const [forgot, { isLoading }] = useForgotPasswordMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    // Data validation
    if (!email) {
      return toast.error("Please enter your email address");
    }
    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email address");
    }

    try {
      const res = await forgot({ email }).unwrap();
      setEmail("");
      toast.success(res?.message);
    } catch (err) {
      toast.error(err?.data?.message || err?.error);
    }
  };
  return (
    <div className="auth">
      {isLoading && <SpinnerImg />}

      <div className="form">
        <h2 className="title">Forgot Password</h2>
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

          <button
            type="submit"
            className="--btn --btn-primary --btn-block"
            style={{ margin: "2rem 0 1rem 0" }}
          >
            Reset Email
          </button>
          <Link to="/login" className="back_link">
            Back to login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
