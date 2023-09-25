import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import "./ProductDetails.scss";

const ProductDetail = ({ open, setOpen, data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(false);

  const handleMessageSubmit = () => {};

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="product_details_container">
      {data ? (
        <div className="product_details_items">
          <div className="product_details_item">
            <RxCross2
              size={30}
              style={{
                position: "absolute",
                right: "5px",
                top: "5px",
                zIndex: 50,
              }}
              onClick={() => setOpen(false)}
            />
            <div className="block_container">
              <div className="details_left">
                <div className="product_image_outer">
                  <img src={data.image_Url[0].url} alt="" />
                </div>
                <div className="avatar_item">
                  <img
                    src={data.shop.shop_avatar.url}
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <h3>{data.shop.name}</h3>
                    <h5>({data.shop.ratings}) Ratings</h5>
                  </div>
                </div>
                <div className="send_message" onClick={handleMessageSubmit}>
                  <span>
                    Send Message{" "}
                    <AiOutlineMessage
                      size={15}
                      color="#fff"
                      style={{ background: "transparent" }}
                    />
                  </span>
                </div>
                <h5>({data.total_sell}) Sold out</h5>
              </div>
              <div className="details_right">
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                <div className="price_section">
                  <h3> Now ${data.discount_price}</h3>
                  <h4>{data.price ? "$" + data.price : null}</h4>
                </div>
                <div className="counting_section">
                  <div className="counter">
                    <button onClick={decrementCount}> - </button>
                    <span>{count}</span>
                    <button onClick={incrementCount}> + </button>
                  </div>
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        style={{
                          cursor: "pointer",
                        }}
                        color={click ? "red" : "#333"}
                        title="Remove from wish list"
                        onClick={() => setClick(!click)}
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        style={{
                          cursor: "pointer",
                        }}
                        color={click ? "red" : "#333"}
                        title="Add to wish list"
                        onClick={() => setClick(!click)}
                      />
                    )}
                  </div>
                </div>
                <div className="add_cart">
                  <span>
                    Add to cart{" "}
                    <AiOutlineShoppingCart
                      style={{ background: "transparent" }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetail;
