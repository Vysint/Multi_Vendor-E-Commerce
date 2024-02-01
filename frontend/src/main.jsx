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
import store from "./store";
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
import ShopLogin from "./components/shop/auth/ShopLogin.jsx";
import "./index.css";
import ShopRegister from "./components/shop/auth/ShopRegister.jsx";
import SellerProtectedRoute from "./components/private/SellerProtectedRoute.jsx";
import ShopDashboard from "./pages/shop/dashboard/ShopDashboard.jsx";
import ShopHomePage from "./pages/shop/ShopHomePage.jsx";
import ShopCreateProductPage from "./pages/shop/ShopCreateProduct/ShopCreateProductPage.jsx";
import ShopAllProducts from "./pages/shop/shopAllProducts/ShopAllProducts.jsx";
import CreateEventPage from "./pages/shop/event/CreateEventPage.jsx";

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
      <Route path="/faq" element={<Faq />} />

      {/* Products details route */}
      <Route path="/product/:name" element={<ProductDetailsPage />} />

      {/* Private Routes */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/*  Seller authentication routes */}
      <Route path="/shop-login" element={<ShopLogin />} />
      <Route path="/create-shop" element={<ShopRegister />} />

      {/* Seller private routes */}
      <Route path="" element={<SellerProtectedRoute />}>
        <Route path="/shop/:id" element={<ShopHomePage />} />
        <Route path="/dashboard" element={<ShopDashboard />} />
        <Route
          path="/dashboard-create-product"
          element={<ShopCreateProductPage />}
        />
        <Route path="/dashboard-products" element={<ShopAllProducts />} />
        <Route path="/dashboard-create-event" element={<CreateEventPage />} />
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
