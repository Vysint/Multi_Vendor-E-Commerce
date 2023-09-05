import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import Card from "../../components/card/Card";
import "./Login.css";
import { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit");
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };
  return (
    <div className="auth">
      <Card>
        <div className="form">
          <h2 className="title">Register</h2>
          <form className="form1">
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
