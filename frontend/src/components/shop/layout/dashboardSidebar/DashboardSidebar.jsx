import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { AiOutlineFolderAdd, AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { VscNewFile } from "react-icons/vsc";
import { CiMoneyBill, CiSettings } from "react-icons/ci";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import "./DashboardSidebar.scss";

const DashboardSidebar = ({ active }) => {
  return (
    <div className="dashboard_sidebar">
      {/* single item */}
      <div className="sidebar_single_item">
        <Link to="/dashboard">
          <RxDashboard
            size={20}
            color={`${active === 1 ? "crimson" : "#555"}`}
          />
        </Link>
        <h5
          className={`item_text ${active === 1 ? "text_crimson" : "text_grey"}`}
        >
          Dashboard
        </h5>
      </div>
      <div className="sidebar_single_item">
        <Link to="/dashboard-orders">
          <FiShoppingBag
            size={20}
            color={`${active === 2 ? "crimson" : "#555"}`}
          />
        </Link>
        <h5
          className={`item_text ${active === 2 ? "text_crimson" : "text_grey"}`}
        >
          All Orders
        </h5>
      </div>
      <div className="sidebar_single_item">
        <Link to="/dashboard-products">
          <FiPackage size={20} color={`${active === 3 ? "crimson" : "#555"}`} />
        </Link>
        <h5
          className={`item_text ${active === 3 ? "text_crimson" : "text_grey"}`}
        >
          All Products
        </h5>
      </div>
      <div className="sidebar_single_item">
        <Link to="/dashboard-create-product">
          <AiOutlineFolderAdd
            size={20}
            color={`${active === 4 ? "crimson" : "#555"}`}
          />
        </Link>
        <h5
          className={`item_text ${active === 4 ? "text_crimson" : "text_grey"}`}
        >
          Create Product
        </h5>
      </div>
      <div className="sidebar_single_item">
        <Link to="/dashboard-events">
          <MdOutlineLocalOffer
            size={20}
            color={`${active === 5 ? "crimson" : "#555"}`}
          />
        </Link>
        <h5
          className={`item_text ${active === 5 ? "text_crimson" : "text_grey"}`}
        >
          All Events
        </h5>
      </div>
      <div className="sidebar_single_item">
        <Link to="/dashboard-create-event">
          <VscNewFile
            size={20}
            color={`${active === 6 ? "crimson" : "#555"}`}
          />
        </Link>
        <h5
          className={`item_text ${active === 6 ? "text_crimson" : "text_grey"}`}
        >
          Create an Event
        </h5>
      </div>
      <div className="sidebar_single_item">
        <Link to="/dashboard-withdraw-money">
          <CiMoneyBill
            size={20}
            color={`${active === 7 ? "crimson" : "#555"}`}
          />
        </Link>
        <h5
          className={`item_text ${active === 7 ? "text_crimson" : "text_grey"}`}
        >
          Withdraw Money
        </h5>
      </div>
      <div className="sidebar_single_item">
        <Link to="/dashboard-messages">
          <BiMessageSquareDetail
            size={20}
            color={`${active === 8 ? "crimson" : "#555"}`}
          />
        </Link>
        <h5
          className={`item_text ${active === 8 ? "text_crimson" : "text_grey"}`}
        >
          Message Inbox
        </h5>
      </div>
      <div className="sidebar_single_item">
        <Link to="/dashboard-coupons">
          <AiOutlineGift
            size={20}
            color={`${active === 9 ? "crimson" : "#555"}`}
          />
        </Link>
        <h5
          className={`item_text ${active === 9 ? "text_crimson" : "text_grey"}`}
        >
          Discount Codes
        </h5>
      </div>
      <div className="sidebar_single_item">
        <Link to="/dashboard-refunds">
          <HiOutlineReceiptRefund
            size={20}
            color={`${active === 10 ? "crimson" : "#555"}`}
          />
        </Link>
        <h5
          className={`item_text ${
            active === 10 ? "text_crimson" : "text_grey"
          }`}
        >
          Refunds
        </h5>
      </div>
      <div className="sidebar_single_item">
        <Link to="/settings">
          <CiSettings
            size={25}
            color={`${active === 11 ? "crimson" : "#555"}`}
          />
        </Link>
        <h5
          className={`item_text ${
            active === 11 ? "text_crimson" : "text_grey"
          }`}
        >
          Settings
        </h5>
      </div>
    </div>
  );
};

export default DashboardSidebar;
