import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from 'typings/screens';

import {Title, Button, Subtitle, Container} from './Home.styles';

type HomeProps = StackScreenProps<RootStackParamList, 'HomeScreen'>;

const Home = () => {
  return (
    <Container>
      <Title>This screen doesn't exist.</Title>
      <Button onPress={() => {}}>
        <Subtitle>Go to home screen!</Subtitle>
      </Button>
    </Container>
  );
};

export default Home;
