import { useSelector } from 'react-redux';
import { RootState } from '../reducers/Store';
import BattleText from './BattleText';
import QuizText from './QuizText';
import BattleText2 from './BattleTextCorrect';

import ArrowButton from './ArrowButton';

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

  return (
    <>
      <div className="bg-white rounded-md w-full h-[200px] p-6">
        {battleTextToggle ? <BattleText /> : ''}
        {quizTextToggle ? <QuizText /> : ''}
        {quizTextToggle2 ? <BattleText2 /> : ''}
        {quizTextToggle2 ? <ArrowButton text = "NEXT" /> : ''}
    
      </div>
    </>
  );
};

export default QuizDisplay;
