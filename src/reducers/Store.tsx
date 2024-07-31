import { configureStore } from "@reduxjs/toolkit";
import quizCardReducer from "../features/QuizCardSlice";
import quizCategoryReducer from "../features/QuizCategorySlice";
import quizTextReducer from "../features/QuizTextSlice";
import BattleTexReducer from "../features/BattleTextSlice";




const store = configureStore({
    reducer: {
      quizCard: quizCardReducer,
      quizCategory: quizCategoryReducer,
      quizText: quizTextReducer,
      battleText: BattleTexReducer,
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  export default store;