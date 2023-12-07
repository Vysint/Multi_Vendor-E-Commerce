import DashboardSidebar from "../../../components/shop/layout/dashboardSidebar/DashboardSidebar";
import DashboardHeader from "../../../components/shop/layout/dashboardHeader/DashboardHeader";
import "./ShopDashboard.scss";

const ShopDashboard = () => {
  return (
    <>
      <DashboardHeader />
      <div className="shop_sidebar">
        <div className="sidebar_container">
          <DashboardSidebar active={1} />
        </div>
      </div>
    </>
  );
};

export default ShopDashboard;
