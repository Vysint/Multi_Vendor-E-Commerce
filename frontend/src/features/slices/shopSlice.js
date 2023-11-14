import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seller: localStorage.getItem("seller")
    ? JSON.parse(localStorage.getItem("seller"))
    : null,
  shopInfo: {
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    avatar: "",
  },
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setShopCredentials: (state, action) => {
      state.shopInfo = action.payload;
    },
    setSellerCredentials: (state, action) => {
      state.seller = action.payload;
      localStorage.setItem("seller", JSON.stringify(action.payload));
    },
    clearShopCredentials: (state) => {
      state.shopInfo = null;
      localStorage.removeItem("shopInfo");
    },
  },
});

export const {
  setShopCredentials,
  setSellerCredentials,
  clearShopCredentials,
} = shopSlice.actions;

export default shopSlice.reducer;
