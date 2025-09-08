import {
  type IQuizStatistics,
  type ICreateQuiz,
  type IQuiz,
  type IQuizQueryParams,
  type TQuestion,
} from "@/types/quiz";
import createQueryStr from "@/utils/helpers/createQueryStr";
import { baseApi } from "./baseApi";

export const quizesApi = baseApi.injectEndpoints({
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
      providesTags: ["Quizzes"],
    }),
    getSingleQuiz: builder.query<IQuiz, string>({
      query: (id) => `/quizes/${id}`,
      providesTags: ["Quizzes"],
    }),
    createQuiz: builder.mutation<void, ICreateQuiz>({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Quizzes"],
    }),
    getQuizStatistics: builder.query<IQuizStatistics, string>({
      query: (id) => `/quizes/${id}/statistics`,
      providesTags: ["Quizzes"],
    }),
    getQuestions: builder.query<TQuestion[], string>({
      query: (id) => `/quizes/${id}/questions`,
    }),
  }),
});

export const {
  useGetAllQuizesInfiniteQuery,
  useGetSingleQuizQuery,
  useGetQuizStatisticsQuery,
  useGetQuestionsQuery,
} = quizesApi;
