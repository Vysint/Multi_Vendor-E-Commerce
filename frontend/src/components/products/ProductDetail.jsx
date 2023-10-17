import { useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./ProductDetail.scss";
import ProductDetailsInfo from "./productDetailsInfo/ProductDetailsInfo";

const ProductDetail = ({ data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);

  const [select, setSelect] = useState(0);

  const navigate = useNavigate();

  const handleMessageSubmit = () => {
    navigate("/inbox?conversation=507ebjver884ehfdjeriv84");
  };

  return (
    <div className="products_details_container">
      {data ? (
        <>
          <div className="products_details_items">
            <div className="images_section">
              <img src={data?.image_Url[select].url} alt="" />
              <div className="tiny_images">
                <img
                  src={data?.image_Url[0].url}
                  alt=""
                  onClick={() => setSelect(0)}
                  className={select === 0 ? "border" : "null"}
                />
                <img
                  src={data?.image_Url[1].url}
                  alt=""
                  onClick={() => setSelect(1)}
                  className={select === 1 ? "border" : "null"}
                />
              </div>
            </div>
            <div className="products_details">
              <h1>{data.name}</h1>
              <p>{data.description}</p>
              <div className="prices">
                <h3>Now ${data.discount_price}</h3>
                <h4>{data.price ? "$" + data.price : null}</h4>
              </div>
              <div className="buttons">
                <div>
                  <button onClick={() => setCount(count > 1 ? count - 1 : 1)}>
                    -
                  </button>
                  <span>{count}</span>
                  <button onClick={() => setCount(count + 1)}>+</button>
                </div>
                <div className="hearts">
                  {click ? (
                    <AiFillHeart
                      size={30}
                      onClick={() => setClick(!click)}
                      color={click ? "red" : "#333"}
                      title="Remove from  wishlist"
                      style={{ background: "transparent", cursor: "pointer" }}
                    />
                  ) : (
                    <AiOutlineHeart
                      size={30}
                      onClick={() => setClick(!click)}
                      color={click ? "red" : "#333"}
                      title="Add to wishlist"
                      style={{ background: "transparent", cursor: "pointer" }}
                    />
                  )}
                </div>
              </div>
              <div className="cart">
                <span>
                  Add to cart{" "}
                  <AiOutlineShoppingCart
                    style={{ background: "transparent" }}
                    size={20}
                  />
                </span>
              </div>
              <div className="shop_details">
                <img
                  src={data.shop.shop_avatar.url}
                  alt=""
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    marginRight: "2px",
                  }}
                />
                <div className="shop_titles">
                  <h3>{data.shop.name}</h3>
                  <h5>({data.shop.ratings}) Ratings</h5>
                </div>
                <div className="message" onClick={handleMessageSubmit}>
                  <span>
                    Send Message{" "}
                    <AiOutlineMessage style={{ background: "transparent" }} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <ProductDetailsInfo data={data} />
        </>
      ) : null}
    </div>
  );
};

export default ProductDetail;
