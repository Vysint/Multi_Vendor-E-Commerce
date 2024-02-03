import CreateEvent from "../../../components/shop/layout/createEvent/CreateEvent";
import DashboardHeader from "../../../components/shop/layout/dashboardHeader/DashboardHeader";
import DashboardSidebar from "../../../components/shop/layout/dashboardSidebar/DashboardSidebar";
import "./ShopCreateEventPage.scss";

const ShopCreateEventPage = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="event_container">
        <div className="event_sidebar">
          <DashboardSidebar active={6} />
        </div>
        <div className="create_event_container">
          <CreateEvent />
        </div>
      </div>
    </div>
  );
};

export default ShopCreateEventPage;
