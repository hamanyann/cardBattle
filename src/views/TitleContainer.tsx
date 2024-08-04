import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import VideoPlayerProps from '../Templates/VideoPlayerProps';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { toggleTitle } from '../features/BattleTextSlice';

export default function SimpleContainer() {
    const dispatch = useDispatch();
    const handleButtonClick = () => {
     dispatch(toggleTitle());
    
    };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{
          display: 'flex-column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="border-4 shadow-2xl rounded-md m-0">
          {' '}
          <VideoPlayerProps src="/Img/title.mp4" />
        </div>
        <div className="text-3xl items-center justify-center text-center">
          {' '}
          <Button sx={{fontSize: '46px', marginTop: '20px'}} variant="contained" onClick={handleButtonClick}>START</Button>
        </div>
      </Container>
    </React.Fragment>
  );
}
