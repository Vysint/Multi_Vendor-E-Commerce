import { Link } from "react-router-dom";
import { navItems } from "../../static/data";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar_items">
      {navItems &&
        navItems.map((i, index) => (
          <div className="nav_item" key={index}>
            <Link to={i.url}>{i.title}</Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
