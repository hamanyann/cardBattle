import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardData } from '../components/types';

interface CorrectState {
  card: CardData[];
  quizText: string;
}

const initialState: CorrectState = {
  card: [],
  quizText: '',
};

const correctSlice = createSlice({
  name: 'quizText',
  initialState,
  reducers: {
    setCard(state, action: PayloadAction<CardData[]>) {
      state.card = action.payload;
    },
    setQuizText(state, action: PayloadAction<string>) {
      state.quizText = action.payload;
    },
  },
});

export const { setCard, setQuizText } = correctSlice.actions;
export default correctSlice.reducer;
export type { CorrectState };
