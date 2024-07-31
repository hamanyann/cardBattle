import { useSelector } from 'react-redux';
import { RootState } from '../reducers/Store';
import BattleText from './BattleText';
import QuizText from './QuizText';

const QuizDisplay = () => {
  const battleTextToggle = useSelector(
    (state: RootState) => state.battleText.battleText
  );
  const quizTextToggle = useSelector(
    (state: RootState) => state.battleText.quizText
  );

  return (
    <>
      <div className="bg-white rounded-md w-full h-[200px] p-6">
        {battleTextToggle ? <BattleText /> : ''}
        {quizTextToggle ? <QuizText /> : ''}
      </div>
    </>
  );
};

export default QuizDisplay;
