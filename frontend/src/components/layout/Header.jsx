import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import "./Header.scss";
const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <nav>
      <div className="logo">
        <Link to="/" className="links">
          <img src={Logo} alt="" />
          <h3>MayFair</h3>
        </Link>
      </div>
      <div className="navItems">
        <span>Categories</span>
        <span>Products</span>
        <span>Best Selling</span>
        <span>Become a seller</span>
        <span className="links">
          {userInfo ? (
            <div>
              <h3 style={{ background: "red" }}>Nothing</h3>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button>Sign In</button>
              </Link>
              <Link to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </span>
        <span className="search_cart">
          <FiSearch size={30} style={{ background: "transparent" }} />
          <span>
            <LuShoppingCart size={30} style={{ background: "transparent" }} />
          </span>
        </span>
      </div>
    </nav>
  );
};

export default Header;
