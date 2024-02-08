import AllEvents from "../../../../components/shop/layout/allEvents/AllEvents";
import DashboardHeader from "../../../../components/shop/layout/dashboardHeader/DashboardHeader";
import DashboardSidebar from "../../../../components/shop/layout/dashboardSidebar/DashboardSidebar";

const ShopAllEvents = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="event_container">
        <div className="event_sidebar">
          <DashboardSidebar active={5} />
        </div>
        <div className="create_event_container">
          <AllEvents />
        </div>
      </div>
    </div>
  );
};

export default ShopAllEvents;
