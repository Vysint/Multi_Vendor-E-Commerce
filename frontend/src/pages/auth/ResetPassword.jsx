import { useState } from "react";
import { SpinnerImg } from "../../components/loader/Loader";
import Card from "../../components/card/Card";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
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
