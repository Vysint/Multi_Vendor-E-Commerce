import { apiSlice } from "./apiSlice";

const EVENTS_URL = "/api/v2/events";

export const eventApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createEvent: builder.mutation({
      query: (data) => ({
        url: `${EVENTS_URL}/create-event`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Event"],
    }),
  }),
});

export const { useCreateEventMutation } = eventApiSlice;
