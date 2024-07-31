import { setCards, setSelectNo } from '../features/QuizCardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { CardData } from '../components/types';
import { useEffect, useState } from 'react';
import { RootState } from '../reducers/Store';
import { GlareCard } from '../components/ui/glare-card';
import { setQuizText, setQuizName, setQuizStatus } from '../features/QuizTextSlice';
import { toggleBattleText } from '../features/BattleTextSlice';

const url = 'http://localhost:3000/data/';

interface CardSelectProps {
  random: number;
}

function getRandomCards(cards: CardData[], count: number): CardData[] {
  const shuffled = [...cards].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const CardSelect: React.FC<CardSelectProps> = ({ random }) => {
  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.quizCard.cards);
  const category = useSelector(
    (state: RootState) => state.quizCategory.category
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const filteredCards = data.filter(
          (card: CardData) => card.category == category
        );
        const randomCards = getRandomCards(filteredCards, 4);
        dispatch(setCards(randomCards));
        dispatch(setQuizText(randomCards[0].description));
        dispatch(setQuizName(randomCards[0].name));
        dispatch(setQuizStatus(randomCards[0].status));
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [category]);

  const selectedCard = cards[random];

  const handleButtonClick = (id: number) => {
    const card = cards.find(card => card.id === id);
    if (card) {
      dispatch(setSelectNo(selectedCard.id));
      dispatch(setCards([card]));
      dispatch(toggleBattleText());
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="w-[250px] h-[400px] flex justify-center items-center">
          <img
            alt="Loading..."
            src="public/Img/back1.jpg"
            className="w-[300px] h-[310px] "
          />
        </div>
      ) : (
        selectedCard && (
          <button
            className="flex justify-center items-center "
            onClick={() => handleButtonClick(selectedCard.id)}
          >
            <GlareCard className="   ">
              <div
                style={{
                  backgroundImage: `url(public/Img/back1.jpg`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                }}
                key={selectedCard.id}
                className=" w-[250px] h-[400px] border-[4px] border-gray-600  rounded relative "
              >
                <div className="absolute inset-0 bg-white bg-opacity-50 " />

                <div className="relative z-10 ">
                  <div className="">
                    <p
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                      className="bg-white flex justify-center items-center text-xm w-[242px] h-[52px] "
                    >
                      {selectedCard.name}
                    </p>
                    <p
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                      className="bg-white flex justify-center items-center text-xs w-[242px] h-[24px]"
                    >
                      {selectedCard.formal}
                    </p>
                  </div>

                  <div className="flex justify-center items-center mt-2 mb-2 ">
                    <img
                      src={selectedCard.img}
                      alt={selectedCard.name}
                      className=" w-56 h-56 border-[4px] border-gray-600  "
                    />
                  </div>
                  <div>
                    <p
                      className="text-left text-xm bg-opacity-75 pl-2 bg-white  h-[70px] pt-2  "
                      dangerouslySetInnerHTML={{ __html: selectedCard.status }}
                    />
                  </div>
                </div>
              </div>
            </GlareCard>
          </button>
        )
      )}
    </>
  );
};
export default CardSelect;
