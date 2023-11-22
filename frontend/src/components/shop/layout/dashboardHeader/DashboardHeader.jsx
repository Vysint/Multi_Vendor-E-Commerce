import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../../../assets/logo.png";
import "./DashboardHeader.scss";
import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { BiMessageSquareDetail } from "react-icons/bi";

const DashboardHeader = () => {
  const { shopInfo } = useSelector((state) => state.shop);
  return (
    <div className="dashboard_container">
      <div className="logo">
        <Link to="/dashboard" className="link">
          <img src={Logo} alt="" />
          <h3>Mayfair</h3>
        </Link>
      </div>
      <div className="icons_container">
        <div className="coupon_container">
          <Link to="/dashboard-coupons">
            <AiOutlineGift
              color="#555"
              size={30}
              style={{
                cursor: "pointer",
                margin: "5px",
                background: "transparent",
              }}
            />
          </Link>
          <Link to="/dashboard-events">
            <MdOutlineLocalOffer
              color="#555"
              size={30}
              style={{
                cursor: "pointer",
                margin: "5px",
                background: "transparent",
              }}
            />
          </Link>
          <Link to="/dashboard-products">
            <FiShoppingBag
              color="#555"
              size={25}
              style={{
                cursor: "pointer",
                margin: "5px",
                background: "transparent",
              }}
            />
          </Link>
          <Link to="/dashboard-orders">
            <FiPackage
              color="#555"
              size={25}
              style={{
                cursor: "pointer",
                margin: "5px",
                background: "transparent",
              }}
            />
          </Link>
          <Link to="/dashboard-messages">
            <BiMessageSquareDetail
              color="#555"
              size={30}
              style={{
                cursor: "pointer",
                margin: "5px",
                background: "transparent",
              }}
            />
          </Link>
          <Link to={`/shop/${shopInfo._id}`}>
            <img src={shopInfo.avatar} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
