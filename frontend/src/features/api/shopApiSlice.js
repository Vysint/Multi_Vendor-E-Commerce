import { apiSlice } from "./apiSlice";

const SHOP_URL = "/api/v2/shop";

export const shopApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerShop: builder.mutation({
      query: (data) => ({
        url: `${SHOP_URL}/register`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Shop"],
    }),
    shopLogin: builder.mutation({
      query: (data) => ({
        url: `${SHOP_URL}/login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Shop"],
    }),
    getSeller: builder.query({
      query: (id) => ({
        url: `${SHOP_URL}/${id}`,
      }),
    }),
    getLoginStatus: builder.query({
      query: () => ({
        url: `${SHOP_URL}/loggedin`,
      }),
    }),
  }),
});

export const {
  useRegisterShopMutation,
  useShopLoginMutation,
  useGetSellerQuery,
  useGetLoginStatusQuery
} = shopApiSlice;
