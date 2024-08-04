import { createSlice } from '@reduxjs/toolkit';

const battleTextSlice = createSlice({
  name: 'battleText',
  initialState: {
    quizText: true,
    battleText: false,
    battleText2: false,
    quizToggle: false,
    battleButton: true,
    resultToggle: false,
    title: true,
    loading: false,
  },
  reducers: {
    toggleBattleText(state) {
      state.battleText = true;
      state.quizText = false;
      state.quizToggle = true;      
    },
    toggleBattle2Text(state) {
      state.battleText = false;
      state.battleText2 = true;
      state.quizToggle = false;
      state.quizText = false;
    },
    toggleQuizExplanation(state) {
      state.quizText = !state.quizText;
      state.battleText = !state.battleText;
    },
    hiddenBattleButton(state) {
      state.battleButton = false;
    },
    toggleReset(state) {
      state.quizText = true;
      state.battleText = false;
      state.battleText2 = false;
      state.quizToggle = false;
      state.battleButton = true;
    },
    toggleResult(state) {
      state.quizText = false;
      state.battleText = false;
      state.battleText2 = false;
      state.quizToggle = false;
      state.battleButton = false;
      state.resultToggle = true;
    },
    toggleTitle(state) {
      state.title = false;
    },
    toggleLoading(state) {
      state.loading = true;
    },
  },
});

export const {
  toggleBattleText,
  toggleBattle2Text,
  toggleQuizExplanation,
  hiddenBattleButton,
  toggleReset,
  toggleResult,
  toggleTitle,
  toggleLoading,
} = battleTextSlice.actions;
export default battleTextSlice.reducer;
