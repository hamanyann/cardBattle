import { useSelector } from 'react-redux';
import { RootState } from '../reducers/Store';

const QuizText = () => {
  const quizText = useSelector((state: RootState) => state.correct.card[0]?.description||"");
  return <>{quizText}</>;
};
export default QuizText;
