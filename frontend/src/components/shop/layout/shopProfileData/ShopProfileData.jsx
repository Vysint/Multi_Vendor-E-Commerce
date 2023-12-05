import { useState } from "react";
import { productData } from "../../../../static/data";
import "./ShopProfileData.scss";
import ProductCard from "../../../utils/card/ProductCard";
import { Link } from "react-router-dom";

const ShopProfileData = ({ isOwner }) => {
  const [active, setActive] = useState(1);
  return (
    <div className="shop_profile_container">
      <div>
        <div className="shop_profile_items">
          <div className="profile_items" onClick={() => setActive(1)}>
            <h5 className={`${active === 1 ? "colored_text" : ""}`}>
              Shop Products
            </h5>
          </div>
          <div className="profile_items" onClick={() => setActive(2)}>
            <h5 className={`${active === 2 ? "colored_text" : ""}`}>
              Running Events
            </h5>
          </div>
          <div className="profile_items" onClick={() => setActive(3)}>
            <h5 className={`${active === 3 ? "colored_text" : ""}`}>
              Shop Reviews
            </h5>
          </div>
        </div>

        {isOwner && (
          <Link to="/dashboard" className="--btn">
            <span>Go Dashboard</span>
          </Link>
        )}
      </div>
      <br />
      <div className="product_data_container">
        {productData.map((i, index) => (
          <ProductCard key={index} data={i} isShop={true} />
        ))}
      </div>
    </div>
  );
};

export default ShopProfileData;
