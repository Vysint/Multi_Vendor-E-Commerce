import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { HiMenuAlt2 } from "react-icons/hi";
import { LuShoppingCart } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { productData, categoriesData } from "../../../static/data";
import Dropdown from "../dropdown/Dropdown";
import Navbar from "../navbar/Navbar";
import InfoBox from "../infoBox/InfoBox";
import Card from "../../utils/card/Card";
import Cart from "../cart/Cart";
import WishList from "../cart/wishList/WishList";
import "./Header.scss";

const Header = ({ activeHeading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishList, setOpenWishList] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const { userInfo } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  const openDropdown = () => {
    setDropdown(!dropdown);
  };
  const openProfile = () => {
    setProfileOpen(!profileOpen);
  };

  const openNavigation = () => {
    setOpenNav(!openNav);
  };

  const resetSearchTerm = () => {
    setSearchTerm("");
  };

  const searchData =
    searchTerm.length === 0
      ? []
      : productData.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

  const onSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  const profileLink = () => {
    navigate("/profile");
  };

  return (
    <>
      <div className="nav_container">
        <div className="nav_logo_section">
          <div className="menu" onClick={openNavigation}>
            <AiOutlineMenu
              size={20}
              style={{
                color: "#fff",
                background: "transparent",
                cursor: "pointer",
              }}
            />
          </div>
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
              onChange={onSearchChange}
              value={searchTerm}
            />
            <AiOutlineSearch size={30} className="outline" />
            {searchData.length > 0 ? (
              <div className="search_data">
                {searchData.map((i, index) => {
                  const d = i.name;
                  const product_name = d.replace(/\s+/g, "-");
                  return (
                    <Link
                      key={index}
                      onClick={resetSearchTerm}
                      to={`/product/${product_name}`}
                    >
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
          <div onClick={() => setOpenCart(true)} className="open_cart">
            <LuShoppingCart
              size={30}
              style={{
                background: "#007bff",
                color: "white",
                cursor: "pointer",
              }}
            />
            <span>1</span>
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
              <div
                style={{ background: "transparent", position: "relative" }}
                className="profile_picture"
              >
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
              <Link to="/login" className="sign_in">
                <BiUserCircle
                  size={25}
                  color="white"
                  style={{ background: "transparent" }}
                />
                <span>Log In</span>
              </Link>
            )}
          </div>
          {/* Cart popup */}
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}
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
              <div onClick={() => setOpenWishList(true)}>
                <AiOutlineHeart
                  size={25}
                  style={{
                    background: "#007bff",
                    color: "white",
                    cursor: "pointer",
                  }}
                />
                <span>0</span>
              </div>
              <div onClick={() => setOpenCart(true)}>
                <LuShoppingCart
                  size={25}
                  style={{
                    background: "#007bff",
                    color: "white",
                    cursor: "pointer",
                  }}
                />
                <span>1</span>
              </div>
            </div>

            {/* Cart popup */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

            {/* Wishlist popup */}

            {openWishList ? (
              <WishList setOpenWishList={setOpenWishList} />
            ) : null}
          </div>
        </div>

        {/* mobile navbar */}
        {openNav ? (
          <div className="mobile_nav_section">
            <div className="icon_dropdown">
              <div
                onClick={() => setOpenWishList(true)}
                className="open_wishlist_dropdown"
              >
                <AiOutlineHeart
                  size={30}
                  color="#fff"
                  style={{
                    background: "transparent",
                    cursor: "pointer",
                  }}
                />
                <span>0</span>
              </div>
              <div className="close_dropdown" onClick={openNavigation}>
                <AiOutlineClose
                  size={25}
                  color="#fff"
                  style={{ background: "transparent", cursor: "pointer" }}
                />
              </div>
            </div>

            {/* Search box */}
            <div className="navigation_search">
              <input
                type="text"
                placeholder="Search Products..."
                onChange={onSearchChange}
                value={searchTerm}
              />
              {searchData.length > 0 ? (
                <div className="search_data_1">
                  {searchData.map((i, index) => {
                    const d = i.name;
                    const product_name = d.replace(/\s+/g, "-");
                    return (
                      <Link
                        key={index}
                        onClick={resetSearchTerm}
                        to={`/product/${product_name}`}
                      >
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
            {/* mobile navbar */}
            <div className="navigation_items">
              <Navbar active={activeHeading} />
            </div>
            {/* become _seller */}
            <Link className="become_seller" id="become_seller" to="/dashboard">
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
              <div
                style={{ background: "transparent", position: "relative" }}
                className="user_info"
              >
                <img
                  src={userInfo.imageURL}
                  alt="Profile Picture"
                  onClick={profileLink}
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "cover",
                    objectPosition: "top",
                    borderRadius: "50%",
                    cursor: "pointer",
                    border: "2px solid #fff",
                    animationName:"anime-opa",
                    animationDuration:"3s"
                  }}
                />
              </div>
            ) : (
              <div className="links">
                <Link to="/login" id="login">
                  Login/
                </Link>
                <Link to="/register">Sign up</Link>
              </div>
            )}
            {/* Wishlist popup */}

            {openWishList ? (
              <WishList setOpenWishList={setOpenWishList} />
            ) : null}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Header;
