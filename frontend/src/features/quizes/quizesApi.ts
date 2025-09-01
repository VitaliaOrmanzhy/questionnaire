import type { ICreateQuiz, IQuiz } from "@/types/quiz";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quizesApi = createApi({
  reducerPath: "quizes",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getAllQuizes: builder.query<IQuiz[], string | null>({
      query: (query) => `/quizes?${query ? "q=" + query : ""}`,
    }),
    getSingleQuiz: builder.query<IQuiz, string>({
      query: (id) => `/quizes/${id}`,
    }),
    createQuiz: builder.mutation<void, ICreateQuiz>({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetAllQuizesQuery, useGetSingleQuizQuery } = quizesApi;
