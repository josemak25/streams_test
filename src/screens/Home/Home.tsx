import React from 'react';

import {Title, Button, Subtitle, Container} from './Home.styles';

export const Home = () => {
  return (
    <Container>
      <Title>This screen doesn't exist.</Title>
      <Button onPress={() => {}}>
        <Subtitle>Go to home screen!</Subtitle>
      </Button>
    </Container>
  );
};
