import type { Quiz, QuizQuery } from "@/types/quiz";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quizesApi = createApi({
    reducerPath: "quizes",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.REACT_APP_API_URL }),
    endpoints: (builder) => ({
        getAllQuizes: builder.query<Quiz[], QuizQuery | void>({
            query: (query) =>
                `/quizes?${query?.title && `title=${query.title}`}&completionsCount=${query?.completionsCount && `title=${query.completionsCount}`}`
        }),
        getSingleQuiz: builder.query<Quiz, number | undefined>({
            query: (id) => `/quizes/${id}`
        })
    })
})

export const { useGetAllQuizesQuery, useGetSingleQuizQuery } = quizesApi;