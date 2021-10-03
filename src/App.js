import React from 'react';

import { styled } from './stitches.config';

const Container = styled('div', {
  backgroundColor: '$pink',
});

const Button = styled('div', {
  backgroundColor: '$red',
  color: '$white',
  borderRadius: '$round',
});

const App = () => {
  return (
    <Container>
      hello, welcome to my app!
      <Button>Button</Button>
    </Container>
  );
};

export default App;
