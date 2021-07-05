import React, {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {useTheme} from 'styled-components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootStackParamList} from 'typings/screens';
import {useDispatch, useSelector} from '@providers/store';
import {getUsers} from '@providers/store/users/actions';

import {Title, Header, Container} from './Home.styles';

type HomeProps = StackScreenProps<RootStackParamList, 'HomeScreen'>;

const Home = () => {
  const {scale} = useTheme();
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();

  const {data, isFetching, error} = useSelector(({users}) => users);

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header insets={insets}>
        <Title>chats</Title>
      </Header>
    </Container>
  );
};

export default Home;
