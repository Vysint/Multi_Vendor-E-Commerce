import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSeller: false,
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
      state.isSeller = true;
      state.shopInfo = action.payload;
    },
  },
});

export const {
  setShopCredentials,
  setSellerCredentials,
  clearShopCredentials,
} = shopSlice.actions;

export default shopSlice.reducer;
