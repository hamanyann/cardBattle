import QuizContainer from './views/QuizContainer';
import MainContainer from './views/MainContainer';
import TitleContainer from './views/TitleContainer';

import { useSelector } from 'react-redux';
import { RootState } from './reducers/Store';

function App() {
  const display = useSelector((state: RootState) => state.battleText.title);

  return (
    <>
      <MainContainer>
        {display ?  <TitleContainer />: <QuizContainer />}
      </MainContainer>
    </>
  );
}

export default App;
