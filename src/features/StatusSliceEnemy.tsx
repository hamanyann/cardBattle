import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StatusEnemyState {
    name: string,
    hp: number,
    atk: number,
    def: number,
    beforeHp: number,
    beforeAtk: number,
    beforeDef: number,
}
const initialState: StatusEnemyState = {
    name:"バグマスター",
    hp: 5,
    atk: 1,
    def: 0,
    beforeHp: 0,
    beforeAtk: 0,
    beforeDef: 0,
};

const statusEnemySlice = createSlice({
    name: 'status',
    initialState,   
    reducers: {
        enemyAtkUp(state, action: PayloadAction<string>) {   
            const value = parseInt(action.payload, 10); 
            state.beforeAtk = state.atk;
            state.atk += value;
        },
        enemyDamage(state, action: PayloadAction<number>) {
            const value = action.payload;
            state.beforeHp = state.hp;
            state.hp = state.hp-value+state.def;
        }
    },
});
export const { enemyAtkUp , enemyDamage} = statusEnemySlice.actions;
export default statusEnemySlice.reducer
export type { StatusEnemyState }