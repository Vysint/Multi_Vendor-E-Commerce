import { Link } from "react-router-dom";
import Button from "../../utils/card/Button";
import Logo from "../../../assets/logo.png";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import {
  footerProductLinks,
  footerSupportLinks,
  footercompanyLinks,
} from "../../../static/data";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_items_1">
        <h1>
          <span>Subscribe</span> for weekly <br />
          events and offers
        </h1>
        <div className="input_item">
          <input type="text" placeholder="Your email address" required />
          <Button>Submit</Button>
        </div>
      </div>
      <div className="footer_items_2">
        <ul>
          <span>
            <img
              src={Logo}
              alt=""
              style={{ filter: "brightess(0)  invert(1)" }}
            />
            <h2>Mayfair</h2>
          </span>
          <br />
          <p>The home and elements needed to create beautiful products.</p>
          <div className="list_items">
            <AiFillFacebook
              size={25}
              style={{ cursor: "pointer", background: "inherit" }}
            />
            <AiOutlineTwitter
              size={25}
              style={{
                marginLeft: "1rem",
                cursor: "pointer",
                background: "inherit",
              }}
            />
            <AiFillInstagram
              size={25}
              style={{
                marginLeft: "1rem",
                cursor: "pointer",
                background: "inherit",
              }}
            />
            <AiFillYoutube
              size={25}
              style={{
                marginLeft: "1rem",
                cursor: "pointer",
                background: "inherit",
              }}
            />
          </div>
        </ul>
        <ul>
          <h1>Company</h1>
          {footerProductLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <ul>
          <h1>Shop</h1>
          {footercompanyLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <ul>
          <h1>Support</h1>
          {footerSupportLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="terms">
        <span>&copy; 2024. Vintage Solutions. All rights reserved. </span>
        <span>Terms & Conditions Apply</span>
        <div>
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
