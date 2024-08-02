import CardSelectCard from '../views/CardSelectCard';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/Store';
import CardSelectCardSelect from './CardSelectCardSelect';
import BattleButton from './BattleButton';
import CardSelectCardCorrect from './CardSelectCardCorrect';
import ToggleButtonNotEmpty from './ToggleButton';

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


  return (
    <>
      <CardSelectCard random={shuffledArray[0]} />
      <CardSelectCard random={shuffledArray[1]} />
      <CardSelectCard random={shuffledArray[2]} />
      <CardSelectCard random={shuffledArray[3]} />
      {!display && isBattleButtonHidden ? (
        <>
          <div className='absolute top-[200px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
            <ToggleButtonNotEmpty />
          </div>
          <CardSelectCardSelect />
          <BattleButton />
          <CardSelectCardCorrect />
        </>
      ) : (
        ''
      )}
    </>
  );
};
export default CardSelect;
