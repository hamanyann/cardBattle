import { useSelector } from 'react-redux';
import { RootState } from '../reducers/Store';
import BattleAction from './BattleAction';

const BattleTextCorrect = () => {
  

  const name = useSelector((state: RootState) => state.statusChange.name);
  const hp = useSelector((state: RootState) => state.statusChange.hp);
  const beforeHp = useSelector(
    (state: RootState) => state.statusChange.beforeHp
  );
 

  const enemyName = useSelector(
    (state: RootState) => state.EnemyStatusChange.name
  );
  const enemyHp = useSelector((state: RootState) => state.EnemyStatusChange.hp);
  const enemyBeforeHp = useSelector(
    (state: RootState) => state.EnemyStatusChange.beforeHp
  );

  return (
    <>
      <BattleAction />
      <div>
        
        <br />
        {name}の攻撃
        <br />
        {enemyName}：HP / {enemyBeforeHp} → {enemyHp}
        <br />
        相手の攻撃
        <br />
        {name}：HP / {beforeHp} → {hp}
      </div>
    </>
  );
};
export default BattleTextCorrect;
