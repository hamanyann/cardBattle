import { createSlice } from '@reduxjs/toolkit';

const BattleTextSlice = createSlice({
    name: 'battleText',
    initialState: {
        quizText: true,
        battleText: false,
    },
    reducers: {
        toggleBattleText(state) {
            state.battleText = !state.battleText;
            state.quizText = !state.quizText; 
        },
        toggleQuizText(state) {
            state.quizText = !state.quizText; 
        },
    },
});

export const { toggleBattleText, toggleQuizText } = BattleTextSlice.actions;
export default BattleTextSlice.reducer;
