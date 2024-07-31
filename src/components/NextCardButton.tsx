import { useDispatch } from 'react-redux';
import { incrementSelectNo ,setSelectNo} from '../features/QuizCardSlice';
import { useSelector } from 'react-redux';

const NextCardButton = () => {
  const dispatch = useDispatch();
  const category = useSelector(
    (state: { quizCategory: { category: string } }) =>
      state.quizCategory.category
  );
  const selectNo = useSelector(
    (state: { quizCard: { selectNo: number } }) => state.quizCard.selectNo
  );

  const handleNextCard = () => {
    if (category.length -3 > selectNo) {
      dispatch(incrementSelectNo());
    }else{
        dispatch(setSelectNo(0));
        
    }
  };
  return (
    <>
      <button className="text-4xl" onClick={handleNextCard}>
        ＞
      </button>
    </>
  );
};

export default NextCardButton;
