import { AiOutlineDelete } from "react-icons/ai";
import "./PaymentMethod.scss";

const PaymentMethod = () => {
  return (
    <div className="payment_container">
      <div className="payment_item">
        <h1>Payment Methods</h1>
        <div className="payment_new">
          <span>Add New</span>
        </div>
      </div>
      <br />
      <div className="card_item">
        <div className="cards">
          <img
            src="https://bonik-react.vercel.app/assets/images/payment-methods/Visa.svg"
            alt=""
          />
          <h5>Vincent Kipng&apos;etich</h5>
        </div>

        <div className="cards_1">
          <h6>1234 **** **** ****</h6>
          <h5>08/2024</h5>
        </div>
        <div className="button_item">
          <AiOutlineDelete
            size={25}
            style={{
              cursor: "pointer",
              background: "transparent",
              color: "red",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
