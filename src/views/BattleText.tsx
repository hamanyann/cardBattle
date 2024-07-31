import { useSelector } from 'react-redux';
import { RootState } from '../reducers/Store';

const BattleText = () => {
  const selectCard = useSelector(
    (state: RootState) => state.quizCard.cards[0].name
  );
  const quizName = useSelector((state: RootState) => state.quizText.quizName);
  return (
    <>
      <p>
        選択したカードは
        <br />
        {selectCard}
        <br />
        <br />
        正解は・・・
        <br />
        {quizName}
      </p>
      <div className="flex justify-center items-center">
        {' '}
        <a
          href="#_"
          className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
        >
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
          <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
            Buttle
          </span>
        </a>
      </div>
    </>
  );
};
export default BattleText;
