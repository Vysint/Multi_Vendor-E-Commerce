import { useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineCamera } from "react-icons/ai";
import "./ProfileContent.scss";

const ProfileContent = ({ active }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const [user, setUser] = useState({
    name: userInfo.name,
    email: userInfo.email,
    phoneNumber: "",
    zipCode: "",
    address1: "",
    address2: "",
  });

  const handleInputChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="content_container">
      {/* Profile */}
      {active === 1 && (
        <>
          <div className="profile_container">
            <div className="relative">
              <img src={userInfo.imageURL} alt="" />
              <div className="camera">
                <AiOutlineCamera style={{ background: "transparent" }} />
              </div>
            </div>
          </div>
          <br />
          <br />

          <div className="form_container">
            <form onSubmit={handleSubmit} aria-required={true}>
              <div className="form_inputs">
                <div className="inputs">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="inputs">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    disabled
                    value={userInfo.email}
                  />
                </div>
              </div>
              <div className="form_inputs">
                <div className="inputs">
                  <label>Phone Number</label>
                  <input
                    type="number"
                    name="phoneNumber"
                    value={user.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="inputs">
                  <label>Zip Code</label>
                  <input
                    type="number"
                    name="zipCode"
                    value={user.zipCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form_inputs">
                <div className="inputs">
                  <label>Address 1</label>
                  <input
                    type="address"
                    name="address1"
                    value={user.address1}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="inputs">
                  <label>Address 2</label>
                  <input
                    type="address"
                    name="address2"
                    value={user.address2}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <button type="submit">Update Profile</button>
            </form>
          </div>
        </>
      )}

      {/* Orders */}
    </div>
  );
};

export default ProfileContent;
