import { useState } from "react";
import { useSelector } from "react-redux";
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
import InfoBox from "./InfoBox";
import Card from "../utils/card/Card";
import "./Header.scss";

const Header = ({ activeHeading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const [active, setActive] = useState(false);

  const { userInfo } = useSelector((state) => state.auth);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
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
  const openProfile = () => {
    setProfileOpen(!profileOpen);
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
          <Link className="become_seller" to="/dashboard">
            <button>
              <span>Become Seller</span>
              <IoIosArrowForward
                size={25}
                style={{ background: "transparent", paddingTop: "4px" }}
                color="#fff"
              />
            </button>
          </Link>
          {userInfo ? (
            <div style={{ background: "transparent", position: "relative" }}>
              <img
                src={userInfo.imageURL}
                alt="Profile Picture"
                onClick={openProfile}
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                  objectPosition: "top",
                  borderRadius: "50%",
                  cursor: "pointer",
                  border: "2px solid #fff",
                }}
              />
              {profileOpen ? (
                <InfoBox
                  userInfo={userInfo}
                  openProfile={openProfile}
                  profileOpen={profileOpen}
                />
              ) : null}
            </div>
          ) : (
            <Link to="/login">
              <BiUserCircle
                size={25}
                color="white"
                style={{ background: "transparent" }}
              />
              <span>Sign In</span>
            </Link>
          )}
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
            <Navbar active={activeHeading} />
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
