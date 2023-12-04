import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const SellerProtectedRoute = () => {
  const { shopInfo } = useSelector((state) => state.shop);
  const location = useLocation();

  return shopInfo ? (
    <Outlet />
  ) : (
    <Navigate to="/shop-login" state={{ from: location }} replace />
  );
};

export default SellerProtectedRoute;
