import { useSelector } from 'react-redux';
import { RootState } from '../reducers/Store';
import { useDispatch } from 'react-redux';
import { atkUp } from '../features/StatusSlice';
import { useEffect } from 'react';

const StatusAction = () => {
  const dispatch = useDispatch();
  const status = useSelector(
    (state: RootState) => state.quizCard.cards[0].status
  );

  useEffect(() => {
    const parts = status.split('<br>');
    const selfParts = parts.filter(part => part.includes('自身'));
    const enemyParts = parts.filter(part => part.includes('相手'));

    selfParts.forEach(part => {
      if (part.includes('ATK')) {
        const match = part.match(/ATK ([+-]\d+)/);
        if (match && match[1]) {
          const value = match[1];
          dispatch(atkUp(value));
          console.log(`value: ${value}`);
        }
      }
    });

    enemyParts.forEach(part => {
      if (part.includes('ATK')) {
        const match = part.match(/ATK ([+-]\d+)/);
        if (match && match[1]) {
          const value = match[1];
          dispatch(atkUp(value));
          console.log(`value: ${value}`);
        }
      }
    });
  }, [status]);

  return null;
};

export default StatusAction;
