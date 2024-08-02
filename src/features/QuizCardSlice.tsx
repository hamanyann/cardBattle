import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardData } from '../components/types';


interface QuizCardState {
  cards: CardData[];
  selectNo: number;
  displayCard: boolean;
}

const initialState: QuizCardState = {
  cards: [],
  selectNo: 0,
  displayCard: true,
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
    toggleDisplayCard(state) {
      state.displayCard = !state.displayCard;
    },
  },
});

export const { setCards, incrementSelectNo, decrementSelectNo, setSelectNo , toggleDisplayCard} =
  quizCardSlice.actions;
export default quizCardSlice.reducer;
export type { QuizCardState };
