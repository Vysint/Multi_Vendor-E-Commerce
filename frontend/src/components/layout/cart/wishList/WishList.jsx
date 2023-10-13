import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";

const Wishlist = ({ setOpenWishList }) => {
  const cartData = [
    {
      name: "Iphone 14 pro max 256 gb ssd and 8gb ram sliver colour",
      description: "test",
      price: 999,
    },
    {
      name: "Iphone 14 pro max 256 gb ssd and 8gb ram sliver colour",
      description: "test",
      price: 245,
    },
    {
      name: "Iphone 14 pro max 256 gb ssd and 8gb ram sliver colour",
      description: "test",
      price: 645,
    },
  ];
  return (
    <div className="cart_container">
      <div className="cart_items">
        <div className="cart_item">
          <div className="close_cart">
            <RxCross1
              size={23}
              style={{ cursor: "pointer", background: "transparent" }}
              onClick={() => setOpenWishList(false)}
            />
          </div>
          {/* Items length */}
          <div className="cart">
            <AiOutlineHeart size={25} style={{ background: "transparent" }} />
            <h3>3 items</h3>
          </div>

          {/* Cart single item */}
          <br />
          <div className="cart_single">
            {cartData.map((cart_item, index) => (
              <CartSingle key={index} data={cart_item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Wishlist;

const CartSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;
  return (
    <div className="cart_item_container">
      <div className="cart_item_single">
        <RxCross1 style={{ cursor: "pointer" }} size={20} />
        <img
          src="https://bonik-react.vercel.app/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png"
          alt=""
        />
        <div className="item_p">
          <h1>{data.name}</h1>
          <h4
            style={{
              fontWeight: "600",
              fontSize: "17px",
              paddingTop: "3px",
              color: "#d02222",
              fontFamily: "Roboto",
            }}
          >
            US${totalPrice}
          </h4>
        </div>
        <BsCartPlus
          size={25}
          style={{ cursor: "pointer" }}
          title="Add to cart"
        />
      </div>
    </div>
  );
};
