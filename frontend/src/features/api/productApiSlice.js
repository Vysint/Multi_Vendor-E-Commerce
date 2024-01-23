import { apiSlice } from "./apiSlice";

const PRODUCT_URL = "/api/v2/products";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCT_URL}/create-product`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
    getProducts: builder.query({
      query: () => `${PRODUCT_URL}`,
      providesTags: ["Product"],
    }),
  }),
});

export const { useCreateProductMutation, useGetProductsQuery } =
  productApiSlice;
