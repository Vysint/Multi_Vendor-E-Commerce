import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSellerQuery,
  useLogoutSellerMutation,
} from "../../../../features/api/shopApiSlice";
import { SpinnerImg } from "../../../loader/Loader";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { clearCredentials } from "../../../../features/slices/shopSlice";
import "./ShopInfo.scss";

const ShopInfo = ({ isOwner }) => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSellerQuery(id);
  const [logout] = useLogoutSellerMutation();

  const { shopInfo } = useSelector((state) => state.shop);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!shopInfo) {
  //     navigate("/");
  //   }
  // }, [navigate, shopInfo]);

  if (isLoading) {
    return <SpinnerImg />;
  }

  if (isError || !data) {
    return <div>Something went wrong</div>;
  }

  const logoutHandler = async () => {
    try {
      await logout().unwrap();
      dispatch(clearCredentials());
      // navigate("/");
      toast.success("Seller Logout Successful");
    } catch (err) {
      toast.error(err?.data?.message || err.error?.message);
    }
  };

  return (
    <div className="shop_info_container">
      <div className="info_data_container">
        <div className="info_data">
          <img src={data.avatar} alt="" />
        </div>
        <h3>{data.name}</h3>
        <p>{data.description}</p>
      </div>
      <div className="address_info">
        <h5>Address</h5>
        <h4>{data.address}</h4>
      </div>
      <div className="address_info">
        <h5>Phone Number</h5>
        <h4>0{data.phoneNumber}</h4>
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
        <h4>{data.createdAt?.slice(0, 10)}</h4>
      </div>

      {isOwner && (
        <div className="isOwner">
          <div className="isOwner_button --btn">
            <span>Edit Shop</span>
          </div>
          <div className="isOwner_button --btn" onClick={logoutHandler}>
            <span>Log Out</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopInfo;
