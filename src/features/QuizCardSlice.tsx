import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardData } from '../components/types';


interface QuizCardState {
  cards: CardData[];
  selectNo: number;
}

const initialState: QuizCardState = {
  cards: [],
  selectNo: 0,
};

const quizCardSlice = createSlice({
  name: 'quizCard',
  initialState,
  reducers: {
    setCards(state, action: PayloadAction<CardData[]>) {
      state.cards = action.payload;
    },
    incrementSelectNo(state) {
      state.selectNo += 1;
    },
    decrementSelectNo(state) {
      state.selectNo -= 1;
    },
    setSelectNo(state, action: PayloadAction<number>) {
      state.selectNo = action.payload;
    },
  },
});

export const { setCards, incrementSelectNo, decrementSelectNo, setSelectNo } =
  quizCardSlice.actions;
export default quizCardSlice.reducer;
export type { QuizCardState };
