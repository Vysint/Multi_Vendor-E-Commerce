import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetLoginStatusQuery } from "./features/api/shopApiSlice";
import { setLogin } from "./features/slices/shopSlice";
const App = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { seller } = useSelector((state) => state.shop);
  const { data } = useGetLoginStatusQuery();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  useEffect(() => {
    if (seller) {
      navigate("/dashboard");
    }
  }, [navigate, seller]);

  useEffect(() => {
    async function loginStatus() {
      const status = data;
      dispatch(setLogin(status));
    }
    loginStatus();
  }, [data, dispatch]);

  return (
    <>
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default App;
