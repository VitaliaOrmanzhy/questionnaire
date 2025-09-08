import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.REACT_APP_API_URL}/api/`,
  }),
  tagTypes: ["Quizzes", "Users"],
  endpoints: () => ({}),
});
