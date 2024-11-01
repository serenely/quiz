import { createSlice } from "@reduxjs/toolkit";

const loadAnswersFromLocalStorage = () => {
  const savedAnswers = localStorage.getItem('answers');
  return savedAnswers ? JSON.parse(savedAnswers) : [];
};

const saveAnswersToLocalStorage = (answers) => {
  localStorage.setItem('answers', JSON.stringify(answers));
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    answers: loadAnswersFromLocalStorage(),
    selectedAnswer: null,
  },
  reducers: {
    addCurrentAnswer: (state, action) => {
      const { answer, stepIndex } = action.payload; 

      state.answers[stepIndex] = answer;
      state.selectedAnswer = null;
      saveAnswersToLocalStorage(state.answers); 
    },
    resetAnswers: (state) => {
      state.answers = [];
      state.selectedAnswer = null;
      localStorage.removeItem('answers'); 
    },
    setSelectedAnswer: (state, action) => {
      state.selectedAnswer = action.payload;
    }
  }
});

export const { addCurrentAnswer, resetAnswers, setSelectedAnswer } = quizSlice.actions;
export default quizSlice.reducer;
