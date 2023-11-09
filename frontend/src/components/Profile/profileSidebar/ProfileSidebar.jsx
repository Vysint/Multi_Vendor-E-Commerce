import { useDispatch } from "react-redux";
import { RxPerson } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import {
  AiOutlineCreditCard,
  AiOutlineLogin,
  AiOutlineMessage,
} from "react-icons/ai";
import { MdOutlineTrackChanges } from "react-icons/md";
import { TbAddressBookOff } from "react-icons/tb";
import { useLogoutMutation } from "../../../features/api/usersApiSlice";
import { clearCredentials } from "../../../features/slices/authSlice";
import { toast } from "react-toastify";
import "./ProfileSidebar.scss";

const ProfileSidebar = ({ active, setActive }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [logout] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logout().unwrap();
      dispatch(clearCredentials());
      // toast.success("Logout successful");
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error?.message);
    }
  };
  return (
    <div className="sidebar_profile">
      <div className="person_profile" onClick={() => setActive(1)}>
        <RxPerson
          size={20}
          color={active === 1 && "red"}
          style={{ cursor: "pointer", background: "transparent" }}
        />
        <span className={active === 1 ? "span_profile" : ""}>Profile</span>
      </div>
      <div className="person_profile" onClick={() => setActive(2)}>
        <HiOutlineShoppingBag
          size={20}
          color={active === 2 && "red"}
          style={{ cursor: "pointer", background: "transparent" }}
        />
        <span className={active === 2 ? "span_profile" : ""}>Orders</span>
      </div>
      <div className="person_profile" onClick={() => setActive(3)}>
        <HiOutlineReceiptRefund
          size={20}
          color={active === 3 && "red"}
          style={{ cursor: "pointer", background: "transparent" }}
        />
        <span className={active === 3 ? "span_profile" : ""}>Refunds</span>
      </div>
      <div
        className="person_profile"
        onClick={() => setActive(4) || navigate("/inbox")}
      >
        <AiOutlineMessage
          size={20}
          color={active === 4 && "red"}
          style={{ cursor: "pointer", background: "transparent" }}
        />
        <span className={active === 4 ? "span_profile" : ""}>Inbox</span>
      </div>
      <div className="person_profile" onClick={() => setActive(5)}>
        <MdOutlineTrackChanges
          size={20}
          color={active === 5 && "red"}
          style={{ cursor: "pointer", background: "transparent" }}
        />
        <span className={active === 5 ? "span_profile" : ""}>Track Order</span>
      </div>
      <div className="person_profile" onClick={() => setActive(6)}>
        <AiOutlineCreditCard
          size={20}
          color={active === 6 && "red"}
          style={{ cursor: "pointer", background: "transparent" }}
        />
        <span className={active === 6 ? "span_profile" : ""}>
          Payment Methods
        </span>
      </div>
      <div className="person_profile" onClick={() => setActive(7)}>
        <TbAddressBookOff
          size={20}
          color={active === 7 && "red"}
          style={{ cursor: "pointer", background: "transparent" }}
        />
        <span className={active === 7 ? "span_profile" : ""}>Address</span>
      </div>
      <div className="person_profile" onClick={logoutHandler}>
        <AiOutlineLogin
          size={20}
          color={active === 8 && "red"}
          style={{ cursor: "pointer", background: "transparent" }}
        />
        <span
          className={active === 8 ? "span_profile" : ""}
          onClick={logoutHandler}
        >
          Log Out
        </span>
      </div>
    </div>
  );
};

export default ProfileSidebar;
