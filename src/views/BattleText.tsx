import { useSelector } from 'react-redux';
import { RootState } from '../reducers/Store';
import GibberishText from '../components/ui/Gibberish-text';


const BattleText = () => {
  const selectedCard = useSelector(
    (state: RootState) => state.quizCard.cards[0]
  );
  const correct = useSelector((state: RootState) => state.correct.card[0]);
  return (
    <>
      <div className="flex justify-center items-center">
        {selectedCard.name === correct.name ? (
          <GibberishText
            text="解析成功"
            className="text-red-500 text-6xl mt-10 mb-10 font-noto-serif-jp"
          />
        ) : (
          <GibberishText
            text="解析失敗"
            className="  text-6xl mt-10 mb-10 font-noto-serif-jp"
          />
        )}
      </div>
     
    </>
  );
};
export default BattleText;
