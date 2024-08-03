import { useSelector } from 'react-redux';
import { RootState } from '../reducers/Store';
import BattleText from './BattleText';
import QuizText from './QuizText';
import BattleText2 from './BattleTextCorrect';

import ArrowButton from './ArrowButton';
import WinButton from './WinButton';

const QuizDisplay = () => {
  const battleTextToggle = useSelector(
    (state: RootState) => state.battleText.battleText
  );
  const quizTextToggle = useSelector(
    (state: RootState) => state.battleText.quizText
  );

  const quizTextToggle2 = useSelector(
    (state: RootState) => state.battleText.battleText2
  );
  const enemyHp = useSelector((state: RootState) => state.EnemyStatusChange.hp);

  const selfHp = useSelector((state: RootState) => state.statusChange.hp);

  const resultToggle = useSelector(
    (state: RootState) => state.battleText.resultToggle
  );

  return (
    <>
      <div className="bg-white rounded-md w-full h-[200px] p-6">
        {battleTextToggle ? <BattleText /> : ''}
        {quizTextToggle ? <QuizText /> : ''}
        {quizTextToggle2 ? <BattleText2 /> : ''}
        {quizTextToggle2 && enemyHp > 0 && selfHp > 0 ? <ArrowButton text="NEXT" /> : ''}
        {quizTextToggle2 && enemyHp <= 0 ? (
          <div className="flex justify-center mt-[100px]">
            <WinButton />
          </div>
        ) : (
          ''
        )}
        {quizTextToggle2 && selfHp <= 0 ? (
          <div className="flex justify-center mt-[100px]">
            <div className='text-3xl '>LOSE</div>
          </div>
        ) : (
          ''
        )}
       
        {resultToggle ? <div>結果表示</div> : ''}
      </div>
    </>
  );
};

export default QuizDisplay;
