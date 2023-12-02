import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { shopInfo } = useSelector((state) => state.shop);

  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  useEffect(() => {
    if (shopInfo) {
      navigate("/dashboard");
    }
  }, [navigate, shopInfo]);

  return (
    <>
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default App;
