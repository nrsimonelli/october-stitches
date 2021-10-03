import React from 'react';

import { styled } from './stitches.config';

const Container = styled('div', {
  display: 'flex',
  backgroundColor: '$gray5',
  maxWidth: '480px',
  mx: 'auto',
  minHeight: '100%',
});

const Button = styled('button', {
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  fontSize: '$1',
});

const Box = styled('div', {
  size: '200px',
  linearGradient: '19deg, #21D4FD 0%, #B721FF 100%',
  br: '$round',
});

const App = () => {
  return (
    <Container>
      <Box>hello, welcome to my app!</Box>
      <Button>Button</Button>
    </Container>
  );
};

export default App;
