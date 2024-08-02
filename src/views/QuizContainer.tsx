import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import QuizDisplay from './QuizDisplay';
import CardSelect from './CardSelect';
import SelfContainer from './SelfContainer';
import EnemyContainer from './EnemyContainer';


export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{ paddingTop: 2, display: 'flex', justifyContent: 'space-between' }}
      >
        <Box sx={{ width: '330px', display: 'flex', marginTop: '10px' }}>
          <SelfContainer />
        </Box>
        <Box sx={{ display: 'flex', width: '430px', marginTop: '10px' }}>
          <Container sx={{}}>
            <QuizDisplay />
          </Container>
        </Box>
        <Box sx={{ width: '330px', display: 'flex', marginTop: '10px' }}>
          <EnemyContainer />
        </Box>
      </Container>

      <div className="flex justify-center items-center gap-4 p-4">
        <CardSelect/>       
      </div>
    </React.Fragment>
  );
}
