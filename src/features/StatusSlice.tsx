import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StatusState {
  name: string;
  hp: number;
  atk: number;
  def: number;
  beforeHp: number;
  beforeAtk: number;
  beforeDef: number;
}
const initialState: StatusState = {
  name: '自分',
  hp: 60,
  atk: 1,
  def: 0,
  beforeHp: 5,
  beforeAtk: 1,
  beforeDef: 0,
};

const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    beforeAtkUp(state) {
      state.beforeAtk = state.atk;
    },
    atkUp(state, action: PayloadAction<string>) {
      const value = parseInt(action.payload, 10);
      state.beforeAtk = state.atk;
      state.atk += value;
    },
    damage(state, action: PayloadAction<number>) {
      const value = action.payload;
      state.beforeHp = state.hp;
      state.hp = state.hp - value + state.def;
      console.log(`${state.name}の残りHPは${state.hp}です`);
    },
  },
});
export const { atkUp, damage } = statusSlice.actions;
export default statusSlice.reducer;
export type { StatusState };
