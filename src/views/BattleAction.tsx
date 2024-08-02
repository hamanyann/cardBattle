import { damage } from '@/features/StatusSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/Store';

const BattleAction = () => {
  const dispatch = useDispatch();
  const atk = useSelector((state: RootState) => state.statusChange.atk);
  const def = useSelector((state: RootState) => state.statusChange.def);
  const hp = useSelector((state: RootState) => state.statusChange.hp);
  const enemyAtk = useSelector((state: RootState) => state.EnemyStatusChange.atk);
  const enemyDef = useSelector((state: RootState) => state.EnemyStatusChange.def);
  const enemyHp = useSelector((state: RootState) => state.EnemyStatusChange.hp);

  useEffect(() => {
    dispatch(damage(enemyAtk));
  }, []);
  
  return null;
};
export default BattleAction;
