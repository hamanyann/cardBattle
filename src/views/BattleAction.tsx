import { damage } from '@/features/StatusSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/Store';
import { enemyDamage } from '@/features/StatusSliceEnemy';

const BattleAction = () => {
  const dispatch = useDispatch();
  const atk = useSelector((state: RootState) => state.statusChange.atk);
  const def = useSelector((state: RootState) => state.statusChange.def);

  const enemyAtk = useSelector(
    (state: RootState) => state.EnemyStatusChange.atk
  );
  const enemyDef = useSelector(
    (state: RootState) => state.EnemyStatusChange.def
  );


  useEffect(() => {
    dispatch(damage(enemyAtk - def));
    dispatch(enemyDamage(atk - enemyDef));
  }, [enemyAtk, dispatch]);

  
  return null;
};
export default BattleAction;
