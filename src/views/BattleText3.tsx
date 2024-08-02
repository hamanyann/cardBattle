import { useSelector } from 'react-redux';
import { RootState } from '../reducers/Store';

const BattleText3 = () => {
  const selectCard = useSelector(
    (state: RootState) => state.quizCard.cards[0].name
  );
  const quizName = useSelector(
    (state: RootState) => state.correct.card[0].name
  );
  const quizStatus = useSelector(
    (state: RootState) => state.correct.card[0].status
  );

  return (
    <>
      <div>
        <p>
          {selectCard}が発動！
          <br />
          {quizStatus}
          <br />
          <br />
          正解は・・・
          <br />
          {quizName}
        </p>
      </div>
    </>
  );
};
export default BattleText3;
