import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StatusState {
  name: string;
  hp: number;
  atk: number;
  def: number;
  beforeHp: number;
  beforeAtk: number;
  beforeDef: number;
  resultAtk: string;
}
const initialState: StatusState = {
  name: '自分',
  hp: 60,
  atk: 1,
  def: 0,
  beforeHp: 60,
  beforeAtk: 1,
  beforeDef: 0,
  resultAtk: '',
};

const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    beforeAtkUp(state) {
      state.beforeAtk = state.atk;
    },
    atkUp(state, action: PayloadAction<number>) {
      const value = action.payload;
      state.beforeAtk = state.atk;
      state.atk += value;
    },
    damage(state, action: PayloadAction<number>) {
      const value = action.payload;     
      state.hp = state.hp - value + state.def;
      console.log(`${state.name}の残りHPは${state.hp}です`);
    },

    resultAtk(state, action: PayloadAction<string>) {
      state.resultAtk = action.payload;
    },
    beforeHp(state) {
      state.beforeHp = state.hp;
    },
  },
});
export const { atkUp, damage , beforeAtkUp, resultAtk, beforeHp} = statusSlice.actions;
export default statusSlice.reducer;
export type { StatusState };
