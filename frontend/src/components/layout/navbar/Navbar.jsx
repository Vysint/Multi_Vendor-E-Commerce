import { Link } from "react-router-dom";
import { navItems } from "../../../static/data";
import "./Navbar.scss";

const Navbar = ({ active }) => {
  return (
    <div className="navbar_items">
      {navItems.map((i, index) => (
        <div className="nav_item" key={index}>
          <Link
            to={i.url}
            className={`${
              active === index + 1 ? "activeNavLink" : "notActiveNavLink"
            }`}
          >
            {i.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
