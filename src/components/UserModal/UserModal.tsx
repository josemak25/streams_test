import React from 'react';
import {IUser} from '@providers/store/users/models';

import {
  Container,
  CloseButton,
  ContentWrapper,
  CloseButtonText,
} from './UserModal.styles';

interface UserModalProps extends IUser {}

const UserModal = (props: UserModalProps) => {
  const _onPress = () => {
    // close overlay modal
  };

  return (
    <Container onPress={_onPress}>
      <ContentWrapper
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white">
        <CloseButton onPress={_onPress}>
          <CloseButtonText>close</CloseButtonText>
        </CloseButton>
      </ContentWrapper>
    </Container>
  );
};

export default UserModal;
