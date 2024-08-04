import { useSelector } from 'react-redux';
import { RootState } from '../reducers/Store';
import BattleText from './BattleText';
import QuizText from './QuizText';
import BattleText2 from './BattleTextCorrect';

import ArrowButton from './ArrowButton';
import WinButton from './WinButton';
import Button from '@mui/material/Button';

const QuizDisplay = () => {
  const battleTextToggle = useSelector(
    (state: RootState) => state.battleText.battleText
  );
  const quizTextToggle = useSelector(
    (state: RootState) => state.battleText.quizText
  );

  const quizTextToggle2 = useSelector(
    (state: RootState) => state.battleText.battleText2
  );
  const enemyHp = useSelector((state: RootState) => state.EnemyStatusChange.hp);

  const selfHp = useSelector((state: RootState) => state.statusChange.hp);

  const resultToggle = useSelector(
    (state: RootState) => state.battleText.resultToggle
  );
  const fullCard = useSelector(
    (state: RootState) => state.quizCard.fullCards.length
  );
  const remainingCard = useSelector(
    (state: RootState) => state.quizCard.newCard.length
  );
  const useCard = fullCard - remainingCard;

  const handleButtonClick = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="bg-white rounded-md w-full h-[200px] p-6">
        {battleTextToggle ? <BattleText /> : ''}
        {quizTextToggle ? <QuizText /> : ''}

        {quizTextToggle2 && (
          <>
            {enemyHp <= 0 && selfHp > 0 && (
              <>
                <div className="text-3xl">YOU WIN</div>
              </>
            )}
            {selfHp <= 0 && enemyHp > 0 && (
              <>
                <div className="text-3xl">YOU LOSE</div>
              </>
            )}
            <BattleText2 />
            
            {enemyHp <= 0 && selfHp > 0 && (
              <div className="flex justify-center mt-[100px]">
                <WinButton />
              </div>
            )}
            {selfHp <= 0 && enemyHp > 0 && (
              <div className="flex justify-center mt-[50px]">
                <Button
                  sx={{ fontSize: '46px', marginTop: '20px' }}
                  variant="contained"
                  onClick={handleButtonClick}
                >
                  再挑戦
                </Button>
              </div>
            )}

          </>
        )}

        {quizTextToggle2 && enemyHp > 0 && selfHp > 0 ? (
          <ArrowButton text="NEXT" />
        ) : (
          ''
        )}

        {quizTextToggle2 && selfHp <= 0 && enemyHp <= 0 ? (
          <div className="flex justify-center mt-[100px]">
            <div className="text-3xl ">DRAW</div>
            <div className="flex justify-center mt-[50px]">
                <Button
                  sx={{ fontSize: '46px', marginTop: '20px' }}
                  variant="contained"
                  onClick={handleButtonClick}
                >
                  再挑戦
                </Button>
              </div>
          </div>
        ) : (
          ''
        )}

        {resultToggle ? (
          <div className="flex justify-center items-center h-full text-2xl">
            SCORE <span className="text-red-500 text-4xl">　{useCard}　</span>{' '}
            TURN
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default QuizDisplay;
