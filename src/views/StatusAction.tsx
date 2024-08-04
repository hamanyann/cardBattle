import { useSelector } from 'react-redux';
import { RootState } from '../reducers/Store';
import { useDispatch } from 'react-redux';
import { atkUp, resultAtk } from '../features/StatusSlice';
import { enemyDamage, enemyResultHp , enemyAtkUp, enemyBeforeHp} from '../features/StatusSliceEnemy';
import { useEffect } from 'react';

const StatusAction = () => {
  const dispatch = useDispatch();
  const status = useSelector(
    (state: RootState) => state.correct.card[0].status
  );
console.log(useSelector ((state: RootState) => state.correct.card[0].name));
console.log(useSelector ((state: RootState) => state.correct.card[0].status));

  const name = useSelector((state: RootState) => state.statusChange.name);
 
  const beforeAtk = useSelector(
    (state: RootState) => state.statusChange.beforeAtk
  );

  const nameEnemy = useSelector(
    (state: RootState) => state.EnemyStatusChange.name
  );
 
  const beforeHpEnemy = useSelector(
    (state: RootState) => state.EnemyStatusChange.beforeHp
  );

  useEffect(() => {
    const parts = status.split('<br>');
    console.log(`parts: ${parts}`);
    const enemyParts = parts.filter(part => part.includes('相手'));
    const selfParts = parts.filter(part => part.includes('自身'));
    
    console.log(`selfParts: ${selfParts}`);
    console.log(`enemyParts: ${enemyParts}`);
    
    enemyParts.forEach(part => {
      console.log(`bero`);
      
      if (part.includes('ATK')) {
        const match = part.match(/ATK ([+-]\d+)/);
        if (match && match[1]) {
          const value = match[1];
          dispatch(enemyAtkUp(value));
          console.log(`value: ${value}`);
        }
      }
      if (part.includes('HP')) {
        const match = part.match(/HP ([+-]\d+)/);
        if (match && match[1]) {
          const value =  Math.abs(parseInt(match[1],10));
          const newHp = beforeHpEnemy-value
          dispatch(enemyDamage(value));
          dispatch(
            enemyResultHp(`${nameEnemy}：HP / ${beforeHpEnemy} → ${newHp}`)
          );
          dispatch(enemyBeforeHp())
        }
      }
    });

    selfParts.forEach(part => {
      if (part.includes('ATK')) {
        const match = part.match(/ATK ([+-]\d+)/);
        if (match && match[1]) {
          const value = parseInt(match[1],10);
          const newAtk = beforeAtk+value
          dispatch(atkUp(value));
          dispatch(resultAtk(`${name}：ATK / ${beforeAtk} → ${newAtk}`));
        }
      }
    });

   
  }, [status]);

  return null;
};

export default StatusAction;
