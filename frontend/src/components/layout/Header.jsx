import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { HiMenuAlt2 } from "react-icons/hi";
import { LuShoppingCart } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { productData, categoriesData } from "../../static/data";
import Dropdown from "./Dropdown";
import Navbar from "./Navbar";
import "./Header.scss";
import Card from "../card/Card";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState("");
  const [dropdown, setDropdown] = useState(false);

  const [active, setActive] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.screenY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts = productData.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchData(filteredProducts);
  };

  const openDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <div className="nav_container">
      <div className="nav_logo_section">
        <div className="logo">
          <Link to="/" className="link">
            <img src={Logo} alt="" />
            <h3>Mayfair</h3>
          </Link>
        </div>
        {/* Search box */}
        <div className="nav_search">
          <input
            type="text"
            placeholder="Search Products..."
            onChange={handleSearchChange}
            value={searchTerm}
          />
          <AiOutlineSearch size={30} className="outline" />
          {searchData && searchData.length !== 0 ? (
            <div className="search_data">
              {searchData &&
                searchData.map((i, index) => {
                  const d = i.name;
                  const product_name = d.replace(/\s+/g, "-");
                  return (
                    <Link key={index} to={`/product/${product_name}`}>
                      <div className="image_search">
                        <img src={i.image_Url[0].url} alt="" />
                        <h1>{i.name}</h1>
                      </div>
                    </Link>
                  );
                })}
            </div>
          ) : null}
        </div>
        <div className="account_credentials">
          <Link to="/login">
            <BiUserCircle
              size={25}
              color="white"
              style={{ background: "transparent" }}
            />
            <span>Sign In</span>
          </Link>
          <Link className="become_seller">
            <button>
              <span>Become Seller</span>
              <IoIosArrowForward
                size={25}
                style={{ background: "transparent", paddingTop: "4px" }}
                color="#fff"
              />
            </button>
          </Link>
        </div>
      </div>
      <div className="nav_items_section">
        {/* categories */}
        <div className="category">
          <HiMenuAlt2
            size={20}
            style={{ background: "transparent", color: "white" }}
          />
          <span
            onClick={openDropdown}
            style={{ background: "transparent", color: "white" }}
          >
            All Categories
          </span>
          {dropdown ? (
            <IoIosArrowDown
              size={20}
              style={{
                paddingTop: "4px",
                background: "transparent",
                color: "white",
              }}
            />
          ) : (
            <IoIosArrowForward
              size={20}
              style={{
                paddingTop: "4px",
                background: "transparent",
                color: "white",
              }}
            />
          )}
          <div className="drop_down">
            <Card>
              {dropdown ? (
                <Dropdown
                  categories={categoriesData}
                  setDropdown={setDropdown}
                />
              ) : null}
            </Card>
          </div>
        </div>
        <div className="nav_items">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="nav_icons">
            <div>
              <AiOutlineHeart
                size={25}
                style={{ background: "#007bff", color: "white" }}
              />
              <span>0</span>
            </div>
            <div>
              <LuShoppingCart
                size={25}
                style={{ background: "#007bff", color: "white" }}
              />
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
