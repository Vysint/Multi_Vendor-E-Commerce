import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const SellerProtectedRoute = () => {
  const { shopInfo } = useSelector((state) => state.shop);

  return shopInfo ? <Outlet /> : <Navigate to="/shop-login" replace />;
};

export default SellerProtectedRoute;
