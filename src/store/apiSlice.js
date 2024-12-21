import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "http://localhost:1337";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => "/api/events",
    }),
    getSchoolInfo: builder.query({
      query: () => "/school-information",
    }),
  }),
});

export const { useGetEventsQuery, useGetSchoolInfoQuery } = apiSlice;
