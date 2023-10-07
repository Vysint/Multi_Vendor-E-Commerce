import Header from "../../components/layout/Header";
import EventCard from "../../components/utils/card/EventCard";
import Footer from "../../components/layout/Footer";

const Events = () => {
  return (
    <div>
      <Header activeHeading={4} />
      <div style={{ padding: "20px 5%" }}>
        <EventCard />
      </div>
      <Footer />
    </div>
  );
};

export default Events;
