import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { SpinnerImg } from "../../components/loader/Loader";
import Card from "../../components/card/Card";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useResetPasswordMutation } from "../../features/slices/usersApiSlice";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const [reset, { isLoading }] = useResetPasswordMutation();
  const navigate = useNavigate();

  const { resetToken } = useParams();
  const submitHandler = async (e) => {
    e.preventDefault();
    // Data validation
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }
    if (password !== confirmPassword) {
      return toast.error("Password do not match");
    }

    const userData = {
      password,
      resetToken,
    };

    try {
      const res = await reset(userData);
      console.log(res?.message);
      toast.success(res?.data?.message);
      navigate("/login");
    } catch (err) {
      toast.error(err);
    }
  };
  return (
    <div className="auth">
      {isLoading && <SpinnerImg />}
      <Card>
        <div className="form">
          <h2 className="title">Reset Password</h2>
          <form className="form1" onSubmit={submitHandler}>
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
            <div className="inputs">
              <label>Confirm Password</label>
              <div className="passwordInput">
                <input
                  type={visible ? "text" : "password"}
                  placeholder="Confirm Password"
                  name="confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
            <button
              type="submit"
              className="--btn --btn-primary --btn-block"
              style={{ margin: "2rem 0" }}
            >
              Reset Password
            </button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default ResetPassword;
