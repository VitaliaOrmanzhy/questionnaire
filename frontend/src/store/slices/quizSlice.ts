import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IQuizCompletionState {
  id: string | null;
  completedQuestions: {
    id: string;
    optionsIds: string[];
  }[];
}

const initialState: IQuizCompletionState = {
  id: null,
  completedQuestions: [],
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    answerQuestion: (
      state,
      {
        payload: { questionId, optionsIds },
      }: PayloadAction<{ questionId: string; optionsIds: string[] }>
    ) => {
      const questionExists = state.completedQuestions?.find(
        (el) => el.id === questionId
      );
      if (!questionExists) {
        const question = {
          id: questionId,
          optionsIds: [...optionsIds],
        };
        state.completedQuestions.push(question);
        return;
      }

      questionExists.optionsIds.push(...optionsIds);
    },
  },
});

const { actions, reducer } = quizSlice;
export const { answerQuestion } = actions;

export default reducer;
