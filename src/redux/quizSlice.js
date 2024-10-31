import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    answers: [],
    selectedAnswer: null,
  },
  reducers: {
    addCurrentAnswer: (state) => {
      if (state.selectedAnswer) {
        state.answers.push(state.selectedAnswer); 
        state.selectedAnswer = null; 
      }
    },
    resetAnswers: (state) => {
      state.answers = [];
      state.selectedAnswer = null;
    },
    setSelectedAnswer: (state, action) => {
      state.selectedAnswer = action.payload;
    },
    removeLastAnswer: (state) => {
      state.answers.pop();
    }
  }
});

export const { addCurrentAnswer, resetAnswers, setSelectedAnswer, removeLastAnswer } = quizSlice.actions;
export default quizSlice.reducer;
