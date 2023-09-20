import { Link } from "react-router-dom";
import sale from "../../assets/yellow.jpg";
import bag from "../../assets/leather.jpg";
import sony from "../../assets/headphones.jpg";
import watch from "../../assets/analog-watch_classic.jpg";
import cosmetic from "../../assets/cosmetics.png";
import fashion from "../../assets/fashion.png";
import shoe from "../../assets/shoe.png";
import ladies from "../../assets/pet_care_1.png";
import redshoe from "../../assets/shoes_red.png";
import macbook from "../../assets/macbook_2.png";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero_container">
      <div className="hero_items">
        <div className="gallery_item img-1">
          <img src={macbook} alt="iphone" />
          <div className="hero_text">
            <Link to="/products">Shop now</Link>
          </div>
        </div>
        <div className="gallery_item img-2">
          <img src={bag} alt="Bag" />
          <div className="hero_text">
            <h3 style={{ color: "#000", fontSize: "2.4rem" }}>
              Bag these styles!
            </h3>
            <Link to="/products">
              <button>Shop all</button>
            </Link>
          </div>
        </div>
        <div className="gallery_item img-3">
          <img src={sony} alt="Headphones" />
          <div className="hero_text">
            <h3></h3>
            <Link to="/products">Shop now</Link>
          </div>
        </div>
        <div className="gallery_item img-4">
          <img src={fashion} alt="" />
          <div className="hero_text">
            <Link to="/products" style={{ color: "#000" }}>
              Shop fashion
            </Link>
          </div>
        </div>
        <div className="gallery_item img-5">
          <img src={watch} alt="" />
          <div className="hero_text">
            <h3></h3>
            <Link to="/products">Shop now</Link>
          </div>
        </div>
        <div className="gallery_item img-6">
          <img src={shoe} alt="" />
          <div className="hero_text">
            <h3 style={{ color: "#000", fontSize: "2.0rem" }}>
              Get the best deals for sneakers!
            </h3>
            <Link to="/products">Shop now</Link>
          </div>
        </div>
        <div className="gallery_item img-7">
          <img src={ladies} alt="" />
          <div className="hero_text">
            <h3></h3>
            <Link to="/products">Shop now</Link>
          </div>
        </div>
        <div className="gallery_item img-8">
          <img src={cosmetic} alt="" />
          <div className="hero_text">
            <h3 style={{ color: "#fff", fontSize: "2.4rem" }}>
              Level up your hair care!
            </h3>
            <Link to="/products">Shop now</Link>
          </div>
        </div>
        <div className="gallery_item img-9">
          <img src={redshoe} alt="" />
          <div className="hero_text">
            <h3></h3>
            <Link to="/products">Shop now</Link>
          </div>
        </div>
        <div className="gallery_item img-10">
          <img src={sale} alt="" style={{ width: "204%" }} />
          <div className="hero_text">
            <h3 style={{ color: "#000", fontSize: "2.4rem" }}>
              All set, get the best! Upto 50% off
            </h3>
            <Link to="/products">
              <button>Shop for the best!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
