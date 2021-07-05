import React from 'react';
import {IUser} from '@providers/store/users/models';

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

  const _onLongPress = () => {
    // open overlay portal
  };

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
