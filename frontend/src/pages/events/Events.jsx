import Header from "../../components/layout/header/Header";
import EventCard from "../../components/utils/card/EventCard";
import Footer from "../../components/layout/footer/Footer";

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
