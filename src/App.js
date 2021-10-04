import React, { useState } from 'react';
import {
  sandTheme,
  darkTheme,
  styled,
  theme,
} from './stitches.config';
import { Button } from './components/Button';

const RootContainer = styled('div', {
  minHeight: '100vh',
  backgroundColor: '$bg200',
  maxWidth: '480px',
  mx: 'auto',
});

const Container = styled('div', {
  backgroundColor: '$primary600',
});

const THEME = {
  0: theme,
  1: sandTheme,
  2: darkTheme,
};

const App = () => {
  const [pageTheme, setPageTheme] = useState(0);

  const changeTheme = () => {
    if (pageTheme === 0) {
      setPageTheme(1);
    }
    if (pageTheme === 1) {
      setPageTheme(2);
    }
    if (pageTheme === 2) {
      setPageTheme(0);
    }
  };

  return (
    <RootContainer className={THEME[pageTheme]}>
      <Container
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Button size='lg' variant='primary' onClick={changeTheme}>
          Theme Switch
        </Button>
        <Button size='lg' variant='secondary'>
          Button
        </Button>
      </Container>
    </RootContainer>
  );
};

export default App;
