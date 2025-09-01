import type { ICreateQuiz, IQuiz, IQuizQueryParams } from "@/types/quiz";
import createQueryStr from "@/utils/helpers/createQueryStr";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quizesApi = createApi({
  reducerPath: "quizes",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getAllQuizes: builder.infiniteQuery<IQuiz[], IQuizQueryParams, number>({
      infiniteQueryOptions: {
        // Must provide a default initial page param value
        initialPageParam: 1,
        // Optionally limit the number of cached pages
        maxPages: 3,
        // Must provide a `getNextPageParam` function
        getNextPageParam: (lastPage, allPages, lastPageParam) =>
          lastPageParam + 1,
        // Optionally provide a `getPreviousPageParam` function
        getPreviousPageParam: (firstPage, allPages, firstPageParam) => {
          return firstPageParam > 0 ? firstPageParam - 1 : undefined;
        },
      },
      query: ({ queryArg, pageParam }) =>
        `/quizes?${createQueryStr({ q: queryArg.q, page: pageParam })}`,
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

export const { useGetAllQuizesInfiniteQuery, useGetSingleQuizQuery } =
  quizesApi;
