import CardSelectCard from '../views/CardSelectCard';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/Store';
import CardSelectCardSelect from './CardSelectCardSelect';
import BattleButton from './BattleButton';
import CardSelectCardCorrect from './CardSelectCardCorrect';
import ToggleButtonNotEmpty from './ToggleButton';
import StatusAction from './StatusAction';

function shuffleArray(array: number[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const array = [0, 1, 2, 3];
const shuffledArray = shuffleArray(array.slice());

const CardSelect = () => {
  const display = useSelector((state: RootState) => state.quizCard.displayCard);
  const isBattleButtonHidden = useSelector(
    (state: RootState) => state.battleText.battleButton
  );

  const selectCard = useSelector(
    (state: RootState) => state.quizCard.cards[0]?.name || ''
  );
  const correctCard = useSelector(
    (state: RootState) => state.correct.card[0]?.name || ''
  );

  const result = useSelector(
    (state: RootState) => state.battleText.resultToggle
  );

 

  return (
    <>
      <CardSelectCard random={shuffledArray[0]} />
      <CardSelectCard random={shuffledArray[1]} />
      <CardSelectCard random={shuffledArray[2]} />
      <CardSelectCard random={shuffledArray[3]} />

      {!display && isBattleButtonHidden ? (
        <>
          <div className="absolute top-[200px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <ToggleButtonNotEmpty />
          </div>
          <CardSelectCardSelect />
          <BattleButton />
          <CardSelectCardCorrect />
          {selectCard === correctCard ? <StatusAction /> : ''}
        </>
      ) : (
        ''
      )}
      {result ? (
        <button
          className="bg-blue-500 text-4xl p-5 rounded-lg"
          onClick={() => window.location.reload()}
        >
          再挑戦
        </button>
      ) : (
        ''
      )}
    </>
  );
};
export default CardSelect;
