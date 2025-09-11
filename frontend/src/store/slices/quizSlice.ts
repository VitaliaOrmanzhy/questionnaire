import type { ICheckboxAnswer, TAnswer, TAnswerPayload } from "@/types/answer";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IQuizCompletionState {
  quizId: string | null;
  answers: TAnswer[];
}

const initialState: IQuizCompletionState = {
  quizId: null,
  answers: [],
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    startQuiz: (state, { payload }: PayloadAction<string>) => {
      state.quizId = payload;
    },
    answerQuestion: (state, { payload }: PayloadAction<TAnswerPayload>) => {
      let { value } = payload;
      if (payload.type === "checkbox") {
        value = value as string;
        const answer = state.answers.find(
          (el) => el.questionId === payload.questionId
        ) as ICheckboxAnswer;
        if (answer.optionsIds.includes(value)) {
          (answer as ICheckboxAnswer).optionsIds.push(value);
        }
      }
    },
  },
});

const { actions, reducer } = quizSlice;
export const { startQuiz, answerQuestion } = actions;

export default reducer;
