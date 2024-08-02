import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardData } from '../components/types';


interface QuizCardState {
  cards: CardData[];
  selectNo: number;
  displayCard: boolean;
  newCard: CardData[];
}

const initialState: QuizCardState = {
  cards: [],
  selectNo: 0,
  displayCard: true,
  newCard: [],
};

const quizCardSlice = createSlice({
  name: 'quizCard',
  initialState,
  reducers: {
    setCards(state, action: PayloadAction<CardData[]>) {
      state.newCard = state.cards;
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
    setResetCards(state) {
      state.cards = state.newCard;
    },
  },
});

export const { setCards, incrementSelectNo, decrementSelectNo, setSelectNo , toggleDisplayCard, setResetCards} =
  quizCardSlice.actions;
export default quizCardSlice.reducer;
export type { QuizCardState };
