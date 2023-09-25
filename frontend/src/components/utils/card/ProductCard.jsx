import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillStar,
  AiOutlineStar,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineEye,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import ProductDetails from "./ProductDetails";
import "./ProductCard.scss";

const ProductCard = ({ data }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const d = data.name;
  const product_name = d.replace(/\s+/g, "-");
  return (
    <>
      <div className="card_container">
        <div className="card_items"></div>
        <Link to={`/product/${product_name}`}>
          <img src={data.image_Url[0].url} alt="" />
        </Link>
        <Link to="/">
          <h5>{data.shop.name}</h5>
        </Link>
        <Link to={`/product/${product_name}`}>
          <h4>
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>
          <div className="product_icons">
            <AiFillStar
              color="#F6BA00"
              size={20}
              style={{ background: "#fff" }}
            />
            <AiFillStar
              color="#F6BA00"
              size={20}
              style={{ background: "#fff" }}
            />
            <AiFillStar
              color="#F6BA00"
              size={20}
              style={{ background: "#fff" }}
            />
            <AiFillStar
              color="#F6BA00"
              size={20}
              style={{ background: "#fff" }}
            />
            <AiOutlineStar
              color="#F6BA00"
              size={20}
              style={{ background: "#fff" }}
            />
          </div>
          <div className="price_items">
            <div className="price_text">
              <h4>
                Now ${data.price === 0 ? data.price : data.discount_price}
              </h4>
              <h5>{data.price ? "$" + data.price : null}</h5>
            </div>
            <span>{data.total_sell} sold</span>
          </div>
        </Link>

        {/* side options */}
        <div>
          {click ? (
            <AiFillHeart
              size={22}
              style={{
                cursor: "pointer",
                position: "absolute",
                right: "4px",
                top: "10px",
              }}
              color={click ? "red" : "#333"}
              title="Remove from wish list"
              onClick={() => setClick(!click)}
            />
          ) : (
            <AiOutlineHeart
              size={22}
              style={{
                cursor: "pointer",
                position: "absolute",
                right: "4px",
                top: "10px",
              }}
              color={click ? "red" : "#333"}
              title="Add to wish list"
              onClick={() => setClick(!click)}
            />
          )}
          <AiOutlineEye
            size={22}
            style={{
              cursor: "pointer",
              position: "absolute",
              right: "4px",
              top: "40px",
            }}
            color="#333"
            onClick={() => setOpen(!open)}
            title="Quick View"
          />
          <AiOutlineShoppingCart
            size={25}
            style={{
              cursor: "pointer",
              position: "absolute",
              right: "4px",
              top: "70px",
            }}
            color="#444"
            onClick={() => setOpen(!open)}
            title="Add to Cart"
          />
          {open ? (
            <ProductDetails open={open} setOpen={setOpen} data={data} />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
