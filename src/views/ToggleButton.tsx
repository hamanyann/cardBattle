import * as React from 'react';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useDispatch } from 'react-redux';
import { toggleQuizExplanation } from '../features/BattleTextSlice';
import { RootState } from '../reducers/Store';
import { useSelector } from 'react-redux';

 function ToggleButtonNotEmpty() {
  const dispatch = useDispatch();
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      dispatch(toggleQuizExplanation());
    }
  };

  const display = useSelector((state: RootState) => state.battleText.quizToggle);

  return (
    <>
      {display ? (
        <Stack direction="row" spacing={4}>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton size="small" value="left" aria-label="left aligned">
              結果
            </ToggleButton>
            <ToggleButton size="small" value="right" aria-label="right aligned">
              問題
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      ) : (
        ''
      )}
    </>
  );
}

export default ToggleButtonNotEmpty