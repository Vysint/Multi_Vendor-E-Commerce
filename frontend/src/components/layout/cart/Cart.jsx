import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import "./Cart.scss";
import CartSingle from "./cartSingle/CartSingle";
import { Link } from "react-router-dom";

const Cart = ({ setOpenCart }) => {
  const cartData = [
    {
      name: "Iphone 14 pro max 256 gb ssd &  8gb ram sliver colour",
      description: "test",
      price: 999,
    },
    {
      name: "Iphone 14 pro max 256 gb ssd &  8gb ram sliver colour",
      description: "test",
      price: 245,
    },
    {
      name: "Iphone 14 pro max 256 gb ssd &  8gb ram sliver colour",
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
              onClick={() => setOpenCart(false)}
            />
          </div>
          {/* Items length */}
          <div className="cart">
            <IoBagHandleOutline
              size={25}
              style={{ background: "transparent" }}
            />
            <h3>3 items</h3>
          </div>

          {/* Cart single item */}
          <br />
          <div className="cart_single">
            {cartData.map((cart_item, index) => (
              <CartSingle key={index} data={cart_item} />
            ))}
          </div>
          <div className="checkout">
            {/* Checkout button */}
            <Link to="/checkout">
              <span>
                <h1>Checkout Now (US$1080)</h1>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
