import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StatusEnemyState {
    name: string,
    hp: number,
    atk: number,
    def: number,
    beforeHp: number,
    beforeAtk: number,
    beforeDef: number,
    resultHp: string,
}
const initialState: StatusEnemyState = {
    name:"バグマスター",
    hp: 50,
    atk: 5,
    def: 0,
    beforeHp: 50,
    beforeAtk: 5,
    beforeDef: 0,
    resultHp: '',
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
           
            state.hp -= value;
        },
        enemyResultHp(state, action: PayloadAction<string>) {
            state.resultHp = action.payload;
        },
        enemyBeforeHp(state) {
            state.beforeHp = state.hp;
        },
        
    },
});
export const { enemyAtkUp , enemyDamage , enemyResultHp , enemyBeforeHp} = statusEnemySlice.actions;
export default statusEnemySlice.reducer
export type { StatusEnemyState }