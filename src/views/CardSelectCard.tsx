import {
  setCards,
  setSelectNo,
  toggleDisplayCard,
  setRemainingCards,
  setFullCards,
  setReducedNewCards,
  setCardsNext,
} from '../features/QuizCardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { CardData } from '../components/types';
import { useEffect } from 'react';
import { RootState } from '../reducers/Store';
import { GlareCard } from '../components/ui/glare-card';
import { setCard } from '../features/CorrectSlice';
import { toggleBattleText, toggleLoading } from '../features/BattleTextSlice';
import PropTypes from 'prop-types';
import data from '../assets/data.json';

interface CardSelectProps {
  random: number;
}

function getRandomCards(cards: CardData[], count: number): CardData[] {
  const shuffled = [...cards].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const preloadImages = (cards: CardData[]): Promise<void[]> => {
  const imagePromises = cards.map(card => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.src = card.img;
      img.onload = () => resolve();
      img.onerror = () =>
        reject(new Error(`Failed to load image: ${card.img}`));
    });
  });
  return Promise.all(imagePromises);
};

const CardSelectCard: React.FC<CardSelectProps> = ({ random }) => {
  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.quizCard.cards);
  const displayCard = useSelector(
    (state: RootState) => state.quizCard.displayCard
  );
  const fullCards = useSelector((state: RootState) => state.quizCard.fullCards);

  const loading = useSelector((state: RootState) => state.battleText.loading);

  useEffect(() => {
    preloadImages(fullCards)
      .then(() => {
        const filteredCards = data.data.filter(
          (card: CardData) => card.id >= 1 && card.id <= 12
        );
        const randomCards = getRandomCards(filteredCards, 4);
        const remainingCards = filteredCards.filter(
          (card: CardData) =>
            !randomCards.find(randomCard => randomCard.id === card.id)
        );
        dispatch(setCards(randomCards));
        dispatch(setCard([randomCards[0]]));
        dispatch(setFullCards(filteredCards));
        dispatch(setRemainingCards(remainingCards));
        setTimeout(() => {
          dispatch(toggleLoading());
        }, 2000);
      })
      .catch(() => {
        toggleLoading();
      });
  }, []);

  const selectedCard = cards[random];

  const handleButtonClick = (id: number) => {
    const card = cards.find(card => card.id === id);

    if (card) {
      dispatch(setCards(cards));
      dispatch(setSelectNo(selectedCard.id));
      dispatch(setCardsNext([card]));
      dispatch(setReducedNewCards([card]));
      dispatch(toggleBattleText());
      dispatch(toggleDisplayCard());
    }
  };

  return (
    <>
      {loading && selectedCard && displayCard && (
        <button
          className="flex justify-center items-center "
          onClick={() => handleButtonClick(selectedCard.id)}
        >
          <GlareCard className="   ">
            <div
              style={{
                backgroundImage: `url(/Img/back1.jpg)`,
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
      )}
    </>
  );
};

CardSelectCard.propTypes = {
  random: PropTypes.number.isRequired,
};
export default CardSelectCard;
