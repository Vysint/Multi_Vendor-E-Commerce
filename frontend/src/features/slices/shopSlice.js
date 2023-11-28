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
      state.shopInfo = action.payload;
    },
    setLogin: (state, action) => {
      state.isSeller = action.payload;
    },
  },
});

export const {
  setShopCredentials,
  setLogin
} = shopSlice.actions;

export default shopSlice.reducer;
