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
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$bg100',
  color: '$highContrast',
});

const Container = styled('div', {
  maxWidth: '480px',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  mx: 'auto',
  backgroundColor: '$bg200',
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
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Button onClick={changeTheme}>Theme Switch</Button>
        <Button>Button</Button>
        <Button color='primary' type='emotion' shape='soft'>
          Button
        </Button>
        <Button color='secondary' type='emotion' shape='soft'>
          Button
        </Button>
        <Button color='accent' type='emotion' shape='soft'>
          Button
        </Button>
        <Button color='primary' type='emotion' shape='square'>
          Button
        </Button>
        <Button color='secondary' type='emotion' shape='square'>
          Button
        </Button>
        <Button color='accent' type='emotion' shape='square'>
          Button
        </Button>
        <Button color='primary' type='emotion' shape='pill'>
          Button
        </Button>
        <Button color='secondary' type='emotion' shape='pill'>
          Button
        </Button>
        <Button color='accent' type='emotion' shape='pill'>
          Button
        </Button>
      </Container>
    </RootContainer>
  );
};

export default App;
