import { configureStore } from '@reduxjs/toolkit';
import quizCardReducer from '../features/QuizCardSlice';
import quizCategoryReducer from '../features/QuizCategorySlice';
import correctReducer from '../features/CorrectSlice';
import battleTexReducer from '../features/BattleTextSlice';
import statusReducer from '../features/StatusSlice';
import enemyStatusReducer from '../features/StatusSliceEnemy';

const store = configureStore({
  reducer: {
    quizCard: quizCardReducer,
    quizCategory: quizCategoryReducer,
    correct: correctReducer,
    battleText: battleTexReducer,
    statusChange: statusReducer,
    EnemyStatusChange:enemyStatusReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
