import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const SellerProtectedRoute = () => {
  const { seller } = useSelector((state) => state.shop);
  
  return seller ? <Outlet /> : <Navigate to="/shop-login" replace />;
};

export default SellerProtectedRoute;


