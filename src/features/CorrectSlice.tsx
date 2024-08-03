import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardData } from '../components/types';

interface CorrectState {
  card: CardData[];
  
}

const initialState: CorrectState = {
  card: [],
 
};

const correctSlice = createSlice({
  name: 'quizText',
  initialState,
  reducers: {
    setCard(state, action: PayloadAction<CardData[]>) {
      state.card = action.payload;
    },   
  },
});

export const { setCard } = correctSlice.actions;
export default correctSlice.reducer;
export type { CorrectState };
