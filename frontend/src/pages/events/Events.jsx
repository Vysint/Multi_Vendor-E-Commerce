import Header from "../../components/layout/Header";
import EventCard from "../../components/utils/card/EventCard";

const Events = () => {
  return (
    <div>
      <Header activeHeading={4} />
      <div style={{ padding: "20px 5%" }}>
        <EventCard />
      </div>
    </div>
  );
};

export default Events;
