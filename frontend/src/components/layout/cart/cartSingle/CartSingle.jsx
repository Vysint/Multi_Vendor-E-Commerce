import { useState } from "react";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import "./CartSingle.scss";
import { RxCross1 } from "react-icons/rx";

const CartSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;
  return (
    <div className="cart_item_container">
      <div className="cart_item_single">
        <div>
          <div className="item_add" onClick={() => setValue(value + 1)}>
            <HiPlus
              size={18}
              color="#fff"
              style={{ background: "transparent" }}
            />
          </div>
          <span>{value}</span>
          <div className="item_minus">
            <HiOutlineMinus
              size={16}
              color="#fff"
              style={{ background: "transparent" }}
              onClick={() => setValue(value === 1 ? 1 : value - 1)}
            />
          </div>
        </div>
        <img
          src="https://bonik-react.vercel.app/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png"
          alt=""
        />
        <div className="item_p">
          <h1>{data.name}</h1>
          <h4>${data.price}</h4>
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
        <RxCross1
          style={{ cursor: "pointer", background: "transparent" }}
          size={35}
        />
      </div>
    </div>
  );
};

export default CartSingle;
