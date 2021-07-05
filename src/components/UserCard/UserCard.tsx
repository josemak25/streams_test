import React from 'react';
import {OverlayProvider} from '@app/providers';
import {IUser} from '@providers/store/users/models';
import UserModal from '../UserModal';

import {
  Name,
  Phone,
  Avatar,
  Container,
  ContentWrapper,
} from './UserCard.styles';

interface UserCardProps extends IUser {}

const UserCard = (props: UserCardProps) => {
  const {name, picture, phone, cell} = props;

  const userName = `${name.title} ${name.first} ${name.last}`;

  const _onLongPress = () => OverlayProvider.open(<UserModal {...props} />);

  return (
    <Container onLongPress={_onLongPress}>
      <Avatar source={{uri: picture.medium}} />
      <ContentWrapper>
        <Name>{userName}</Name>
        <Phone>{phone || cell}</Phone>
      </ContentWrapper>
    </Container>
  );
};

export default UserCard;
