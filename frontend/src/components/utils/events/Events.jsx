import EventCard from "../card/EventCard";
import "./Events.scss";
const Events = () => {
  return (
    <div className="events_container">
      <h1>Popular Events</h1>
      <div className="events_item">
        <EventCard />
      </div>
    </div>
  );
};

export default Events;
