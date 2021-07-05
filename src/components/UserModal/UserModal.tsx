import React from 'react';
import {OverlayProvider} from '@app/providers';
import {IUser} from '@providers/store/users/models';

import {
  Row,
  Text,
  Modal,
  Phone,
  Label,
  Avatar,
  Wrapper,
  ModalTop,
  Container,
  ModalWrapper,
  RowWrapper,
  AvatarRing,
  ModalBottom,
  CloseButton,
  ContentWrapper,
  CloseButtonText,
} from './UserModal.styles';

interface UserModalProps extends IUser {}

const UserModal = (props: UserModalProps) => {
  const {name, picture, email, gender, phone, dob} = props;

  const userName = `${name.title} ${name.first} ${name.last}`;

  const dateOfBirth = new Date(dob.date).toDateString();

  const _onPress = () => OverlayProvider.close();

  return (
    <Container onPress={_onPress}>
      <ContentWrapper
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white">
        <ModalWrapper>
          <Modal>
            <ModalTop>
              <AvatarRing>
                <Avatar source={{uri: picture.large}} />
              </AvatarRing>
              <Label>{userName}</Label>
              <Wrapper>
                <Phone>{phone}</Phone>
              </Wrapper>
            </ModalTop>

            <ModalBottom>
              <Row>
                <RowWrapper>
                  <Label>email</Label>
                  <Text>{email}</Text>
                </RowWrapper>
              </Row>
              <Row>
                <RowWrapper>
                  <Label>city</Label>
                  <Text>{email}</Text>
                </RowWrapper>
              </Row>
              <Row>
                <RowWrapper>
                  <Label>date of birth</Label>
                  <Text>{dateOfBirth}</Text>
                </RowWrapper>
              </Row>
              <Row last={true}>
                <RowWrapper>
                  <Label>gender</Label>
                  <Text>{gender}</Text>
                </RowWrapper>
              </Row>
            </ModalBottom>
          </Modal>
        </ModalWrapper>

        <CloseButton onPress={_onPress}>
          <CloseButtonText>close</CloseButtonText>
        </CloseButton>
      </ContentWrapper>
    </Container>
  );
};

export default UserModal;
