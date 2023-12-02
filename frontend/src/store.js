import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/slices/authSlice";
import shopReducer from "./features/slices/shopSlice";
import { apiSlice } from "./features/api/apiSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    shop: shopReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
