import React from "react";
import ReactDOM from "react-dom/client";
import {
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import App from "./App.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import store from "./store.js";
import { Provider } from "react-redux";
import Home from "./pages/home/Home.jsx";
import Products from "./pages/products/Products.jsx";
import ForgetPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword.jsx";
import BestSelling from "./pages/bestSelling/BestSelling.jsx";
import Events from "./pages/events/Events.jsx";
import Faq from "./pages/FAQ/Faq.jsx";
import ProductDetailsPage from "./pages/productDetails/ProductDetailsPage.jsx";
import Profile from "./pages/profile/Profile.jsx";
import PrivateRoute from "./components/private/PrivateRoute.jsx";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />

      {/* Authentication routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpassword" element={<ForgetPassword />} />
      <Route path="/resetpassword/:resetToken" element={<ResetPassword />} />

      {/* Other navbar routes */}
      <Route path="/products" element={<Products />} />
      <Route path="/best-selling" element={<BestSelling />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events" element={<Events />} />
      <Route path="/faq" element={<Faq />} />

      {/* Products details route */}
      <Route path="/product/:name" element={<ProductDetailsPage />} />

      {/* Private Routes */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
