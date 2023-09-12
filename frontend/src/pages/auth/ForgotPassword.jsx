import { useState } from "react";
import Card from "../../components/card/Card";
import { SpinnerImg } from "../../components/loader/Loader";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="auth">
      {isLoading && <SpinnerImg />}
      <Card>
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
              style={{ margin: "2rem 0" }}
            >
              Reset Reset Email
            </button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default ForgetPassword;
