import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetSellerQuery } from "../../../../features/api/shopApiSlice";
import "./ShopInfo.scss";

const ShopInfo = ({ isOwner }) => {
  const { shopInfo } = useSelector((state) => state.shop);

  const { id } = useParams();

  console.log(id);

  
  return (
    <div className="shop_info_container">
      <div className="info_data_container">
        <div className="info_data">
          <img src={shopInfo.avatar} alt="" />
        </div>
        <h3>{shopInfo.name}</h3>
        <p>{shopInfo.description}</p>
      </div>
      <div className="address_info">
        <h5>Address</h5>
        <h4>{shopInfo.address}</h4>
      </div>
      <div className="address_info">
        <h5>Phone Number</h5>
        <h4>0{shopInfo.phoneNumber}</h4>
      </div>
      <div className="address_info">
        <h5>Total Products</h5>
        <h4>10</h4>
      </div>
      <div className="address_info">
        <h5>Shop Ratings</h5>
        <h4>4/5</h4>
      </div>
      <div className="address_info">
        <h5>Joined On</h5>
        <h4>{shopInfo.createdAt?.slice(0, 10)}</h4>
      </div>

      {isOwner && (
        <div className="isOwner">
          <div className="isOwner_button --btn">
            <span>Edit Shop</span>
          </div>
          <div className="isOwner_button --btn">
            <span>Log Out</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopInfo;
