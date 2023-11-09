import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
  phoneNumber: "",
  address: "",
  zipCode: "",
  avatar: "",
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    shopRegister: (state, action) => {
      const profile = action.payload;
      state.name = profile.name;
      state.email = profile.email;
      state.password = profile.password;
      state.phoneNumber = profile.phoneNumber;
      state.address = profile.address;
      state.zipCode = profile.zipCode;
      state.avatar = profile.avatar;
    },
  },
});

export const { shopRegister } = shopSlice.actions;

export default shopSlice.reducer;
