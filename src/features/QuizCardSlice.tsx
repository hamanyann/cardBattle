import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardData } from '../components/types';

interface QuizCardState {
  cards: CardData[];
  selectNo: number;
  displayCard: boolean;
  newCard: CardData[];
  remainingCards: CardData[];
  fullCards: CardData[];
}

const initialState: QuizCardState = {
  cards: [],
  selectNo: 0,
  displayCard: true,
  newCard: [],
  remainingCards: [],
  fullCards: [],
};

const quizCardSlice = createSlice({
  name: 'quizCard',
  initialState,
  reducers: {
    setCards(state, action: PayloadAction<CardData[]>) {      
      state.cards = action.payload;
      state.newCard = state.cards;
    },
    setCardsNext(state, action: PayloadAction<CardData[]>) {
      state.cards = action.payload;
    },
    setFullCards(state, action: PayloadAction<CardData[]>) {
      state.fullCards = action.payload;
    },
    setSelectNo(state, action: PayloadAction<number>) {
      state.selectNo = action.payload;
    },
    toggleDisplayCard(state) {
      state.displayCard = !state.displayCard;
    },
    setReducedNewCards(state, action: PayloadAction<CardData[]>) {
      state.newCard = state.newCard.filter(
        card => card.id !== action.payload[0].id
      );
    },
    setRemainingCards(state, action: PayloadAction<CardData[]>) {
      state.remainingCards = action.payload;
    },
    setAddCards(state) {
      function getRandomCards(cards: CardData[], count: number): CardData[] {
        const shuffled = [...cards].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
      }
      const randomRemainingCards = getRandomCards(state.remainingCards, 1);
      state.remainingCards = state.remainingCards.filter(
        card => card.id !== randomRemainingCards[0].id
      );
      state.newCard = [...state.newCard, ...randomRemainingCards];
      state.cards = state.newCard;
    },
  },
});

export const {
  setCards,
  setSelectNo,
  toggleDisplayCard,
  setRemainingCards,
  setAddCards,
  setFullCards,
  setReducedNewCards,
  setCardsNext,
} = quizCardSlice.actions;
export default quizCardSlice.reducer;
export type { QuizCardState };
