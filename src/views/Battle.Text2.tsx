import { useSelector } from 'react-redux';
import { RootState } from '../reducers/Store';

const BattleText2 = () => {
    const selectCard = useSelector(
        (state: RootState) => state.quizCard.cards[0].name
    );
    const quizName = useSelector(
        (state: RootState) => state.quizText.quizName
    );
    const  quizStatus = useSelector(
        (state: RootState) => state.quizText.quizStatus
    );



    return (
        <>
            <p>{selectCard}が発動！<br/>
            {quizStatus}<br/><br/>
            正解は・・・<br/>
            {quizName}
            </p>
        </> 
    );
};
export default BattleText2