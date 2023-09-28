import Button from "./Button";
import CountDown from "./CountDown";
import { BsArrowRightShort } from "react-icons/bs";
import "./EventCard.scss";

const EventCard = () => {
  return (
    <div className="eventcard_container">
      <div className="eventcard_image">
        <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />
      </div>
      <div className="eventcard_items">
        <h2>Iphone 14 Pro Max 8/256gb</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
          exercitationem aut, inventore aspernatur magnam molestias, distinctio
          suscipit sit nemo quia ipsum perferendis dignissimos dicta! Libero
          tempore facere dolorem cupiditate? Ex consectetur ipsam necessitatibus
          iure eaque culpa architecto fugiat incidunt blanditiis at quos natus,
          sequi quo tempore eligendi corrupti quibusdam dolores, maiores
          asperiores molestias accusantium excepturi autem. Nostrum magni culpa
          animi!
        </p>
        <div className="eventcard_prices">
          <div className="eventcard_price">
            <h5>Now $999</h5>
            <h5 className="oldPrice">$1099</h5>
          </div>
          <span>120 Sold</span>
        </div>
        <CountDown deadline="2024-09-26" />
        <div className="buttons">
          <Button>See Details</Button>
          <Button>Buy Now</Button>
        </div>
        <div className="extras">
          <span>See More Events</span>
          <BsArrowRightShort size={25} style={{ background: "transparent" }} />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
