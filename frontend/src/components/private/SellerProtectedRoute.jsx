import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const SellerProtectedRoute = () => {
  const { isSeller } = useSelector((state) => state.seller);
  return isSeller ? <Outlet /> : <Navigate to="/shop-login" replace />;
};

export default SellerProtectedRoute;
