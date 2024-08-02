import { useSelector } from 'react-redux';
import { RootState } from '../reducers/Store';
import StatusAction from './StatusAction';
import { useDispatch } from 'react-redux';
import BattleAction from './BattleAction';

const BattleTextCorrect = () => {
  const dispatch = useDispatch();
  const selectCard = useSelector(
    (state: RootState) => state.quizCard.cards[0].name
  );

  const beforeAtk = useSelector(
    (state: RootState) => state.statusChange.beforeAtk
  );

  const name = useSelector((state: RootState) => state.statusChange.name);
  const atk = useSelector((state: RootState) => state.statusChange.atk);
  const hp = useSelector((state: RootState) => state.statusChange.hp);
  const def = useSelector((state: RootState) => state.statusChange.def);
  const beforeHp = useSelector((state: RootState) => state.statusChange.beforeHp);

 const enemyName = useSelector((state: RootState) => state.EnemyStatusChange.name);
  const enemyAtk = useSelector((state: RootState) => state.EnemyStatusChange.atk);
  const enemyHp = useSelector((state: RootState) => state.EnemyStatusChange.hp);
  const enemyDef = useSelector((state: RootState) => state.EnemyStatusChange.def);
  const enemyBeforeHp = useSelector((state: RootState) => state.EnemyStatusChange.beforeHp);

  return (
    <>
      <div>
        {selectCard}が発動！
        <br />
        <BattleAction />
       
        {name}：ATK / {beforeAtk} → {atk}
        <br />
        <br />
        {name}の攻撃！
        <br />
        {enemyName}：HP / {enemyBeforeHp} → {enemyHp}
        <br />
        相手の攻撃！
        <br />
        {name}：HP / {beforeHp} → {hp}
       
      </div>
    </>
  );
};
export default BattleTextCorrect;
