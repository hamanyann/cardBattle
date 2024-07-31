import { useSelector } from 'react-redux';
import { RootState } from '../reducers/Store';

const QuizText = () => {
  const quizText = useSelector((state: RootState) => state.quizText.quizText);
  return <>{quizText}</>;
};
export default QuizText;
