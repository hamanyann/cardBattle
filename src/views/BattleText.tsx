import { useSelector } from 'react-redux';
import { RootState } from '../reducers/Store';
import GibberishText from '../components/ui/Gibberish-text';
import { useSpring, animated } from 'react-spring';

const BattleText = () => {
  const selectedCard = useSelector(
    (state: RootState) => state.quizCard.cards[0].name
  );
  const correct = useSelector((state: RootState) => state.correct.card[0].name);
  const name = useSelector((state: RootState) => state.statusChange.name);
  const atk = useSelector((state: RootState) => state.statusChange.atk);
  const beforeAtk = useSelector(
    (state: RootState) => state.statusChange.beforeAtk
  );
  const fadeInProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 300,
  });
  return (
    <>
      <div className="flex justify-center items-center">
        {selectedCard === correct ? (
          <div>
            <div className="flex justify-center items-center">
              <GibberishText
                text="解析成功"
                className="text-red-500 text-4xl mt-1 mb-4 font-noto-serif-jp"
              />
            </div>
            <animated.div style={fadeInProps} className="text-2xl mt-2">
              {name}：ATK / {beforeAtk} → {atk}
            </animated.div>
          </div>
        ) : (
          <GibberishText
            text="解析失敗"
            className="  text-4xl mt-1 mb-4 font-noto-serif-jp"
          />
        )}
      </div>
    </>
  );
};
export default BattleText;
