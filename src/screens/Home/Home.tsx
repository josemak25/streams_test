import React, {useEffect, useCallback} from 'react';
import {FlatList} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useTheme} from 'styled-components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootStackParamList} from 'typings/screens';
import {useDispatch, useSelector} from '@providers/store';
import {getUsers} from '@providers/store/users/actions';
import {
  UserCard,
  EmptyStateReloader,
  EmptyStateActivityIndicator,
} from '@app/components';
import {IUser} from '@app/providers/store/users/models';

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

  const _listEmptyComponent = useCallback(() => {
    switch (true) {
      case !data && !error && isFetching:
        return <EmptyStateActivityIndicator />;

      case !data && !isFetching && error:
        return <EmptyStateReloader onPress={() => dispatch(getUsers())} />;

      default:
        return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching, error, data]);

  const _renderItem = useCallback(
    ({item}: {item: IUser}) => <UserCard {...item} />,
    [],
  );

  return (
    <Container>
      <Header insets={insets}>
        <Title>chats</Title>
      </Header>
      <FlatList
        data={data}
        renderItem={_renderItem}
        keyExtractor={({login}) => login.uuid}
        ListEmptyComponent={_listEmptyComponent}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: scale(10),
          paddingBottom: scale(insets.bottom),
        }}
      />
    </Container>
  );
};

export default Home;
