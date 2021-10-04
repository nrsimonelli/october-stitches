import React, { useState } from 'react';
import { newTheme, styled } from './stitches.config';
import { Button } from './components/Button';

const Container = styled('div', {
  minHeight: '100vh',
  backgroundColor: '$slate5',
  maxWidth: '480px',
  mx: 'auto',
});

const ColumnDiv = styled('div', {
  backgroundColor: '$cyan4',
});

const App = () => {
  const [isNew, setIsNew] = useState(true);
  const switchTheme = isNew ? '' : newTheme;

  return (
    <Container className={switchTheme}>
      <ColumnDiv
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Button
          size='lg'
          variant='primary'
          onClick={() => setIsNew(!isNew)}
        >
          Theme Switch
        </Button>
        <Button size='lg' variant='secondary'>
          Button
        </Button>
      </ColumnDiv>
    </Container>
  );
};

export default App;
