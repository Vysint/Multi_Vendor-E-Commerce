import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shopInfo: localStorage.getItem("shopInfo")
    ? JSON.parse(localStorage.getItem("shopInfo"))
    : null,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setShopCredentials: (state, action) => {
      state.shopInfo = action.payload;
      localStorage.setItem("shopInfo", JSON.stringify(action.payload));
    },
    clearCredentials: (state) => {
      state.shopInfo = null;
      localStorage.removeItem("shopInfo");
    },
  },
});

export const { setShopCredentials, clearCredentials } = shopSlice.actions;

export default shopSlice.reducer;
