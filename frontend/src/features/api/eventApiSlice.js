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
    getEvents: builder.query({
      query: () => `${EVENTS_URL}`,
      providesTags: ["Event"],
    }),
    deleteEvent: builder.mutation({
      query: (id) => ({
        url: `${EVENTS_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateEventMutation,
  useGetEventsQuery,
  useDeleteEventMutation,
} = eventApiSlice;
