import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import { useLogoutMutation } from "../../../features/api/usersApiSlice";
import { clearCredentials } from "../../../features/slices/authSlice";
import { SpinnerImg } from "../../loader/Loader";
import "./InfoBox.scss";

const InfoBox = ({ userInfo, openProfile, profileOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logout, { isLoading }] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logout().unwrap();
      dispatch(clearCredentials());
      toast.success("Logout successful");
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error?.message);
    }
  };
  return (
    <>
      {isLoading && <SpinnerImg />}
      {profileOpen ? (
        <div className="info_box">
          <AiOutlineClose className="close" size={20} onClick={openProfile} />
          <span>
            <img src={userInfo.imageURL[0].secure_url} alt="" />
            <h3>{userInfo.name}</h3>
          </span>
          <div>
            <Link to="/profile">
              <button>Profile</button>
            </Link>
            <Link to="/logout">
              <button onClick={logoutHandler}>Sign Out</button>
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default InfoBox;
