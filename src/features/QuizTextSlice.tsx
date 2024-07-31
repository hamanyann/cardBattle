import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuizTextState {
    quizText: string;
    quizName: string;
    quizStatus: string;
}

const initialState: QuizTextState = {
    quizText: '問題',
    quizName: '問題',
    quizStatus: '問題',
};

const quizTextSlice = createSlice({
    name: 'quizText',
    initialState,
    reducers: {
        setQuizText(state, action: PayloadAction<string>) {
            state.quizText = action.payload;
        },
        setQuizName(state, action: PayloadAction<string>) {
            state.quizName = action.payload;
        },
        setQuizStatus(state, action: PayloadAction<string>) {
            state.quizStatus = action.payload;
        },
    },
});

export const { setQuizText , setQuizName , setQuizStatus} = quizTextSlice.actions;
export default quizTextSlice.reducer;
export type { QuizTextState };