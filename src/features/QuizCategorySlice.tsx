import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface QuizCategoryState {
  category: string;

}

const initialState: QuizCategoryState = {
  category: 'セキュリティ',
  
};

const quizCategorySlice = createSlice({
  name: 'quizCategory',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
      },
});

export const { setCategory} = quizCategorySlice.actions;
export default quizCategorySlice.reducer;
export type { QuizCategoryState };
