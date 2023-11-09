import { AiOutlineDelete } from "react-icons/ai";
import "./Address.scss";

const Address = () => {
  return (
    <div className="address_container">
      <div className="address_title">
        <h1>My Addresses</h1>
        <div className="address_new">
          <span>Add New</span>
        </div>
      </div>
      <br />
      <div className="address_item">
        <div className="cards">
          <h5>Default</h5>
        </div>

        <div className="cards_1">
          <h6>386 Kabarak Road, Nakuru County, Kenya</h6>
          <h5>08/2024</h5>
        </div>
        <div className="cards_2">
          <h6>(+254) 723-000-000</h6>
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

export default Address;
