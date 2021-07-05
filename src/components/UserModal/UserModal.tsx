import React from 'react';
import {useTheme} from 'styled-components';
import {Foundation, FontAwesome5, Ionicons} from 'react-native-vector-icons';
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
  RowWrapper,
  AvatarRing,
  ModalBottom,
  CloseButton,
  ContentWrapper,
  CloseButtonText,
} from './UserModal.styles';

interface UserModalProps extends IUser {}

const UserModal = (props: UserModalProps) => {
  const {colors, scale} = useTheme();

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
        <Modal>
          <ModalTop>
            <AvatarRing>
              <Avatar source={{uri: picture.large}} />
            </AvatarRing>
            <Label>{userName}</Label>
            <Wrapper>
              {/* <FontAwesome5
                name="phone-alt"
                size={scale(13)}
                color={colors.GRAY_TWO}
              /> */}
              <Phone>{phone}</Phone>
            </Wrapper>
          </ModalTop>
          <ModalBottom>
            <Row>
              {/* <Ionicons name="mail" size={scale(18)} color={colors.GRAY_TWO} /> */}
              <RowWrapper>
                <Label>email</Label>
                <Text>{email}</Text>
              </RowWrapper>
            </Row>
            <Row>
              {/* <FontAwesome5
                name="city"
                size={scale(13)}
                color={colors.GRAY_TWO}
              /> */}
              <RowWrapper>
                <Label>city</Label>
                <Text>{email}</Text>
              </RowWrapper>
            </Row>
            <Row>
              {/* <FontAwesome5
                name="birthday-cake"
                size={scale(16)}
                color={colors.GRAY_TWO}
              /> */}
              <RowWrapper>
                <Label>date of birth</Label>
                <Text>{dateOfBirth}</Text>
              </RowWrapper>
            </Row>
            <Row last={true}>
              {/* <Foundation
                name="male-female"
                size={scale(18)}
                color={colors.GRAY_TWO}
              /> */}
              <RowWrapper>
                <Label>gender</Label>
                <Text>{gender}</Text>
              </RowWrapper>
            </Row>
          </ModalBottom>
        </Modal>

        <CloseButton onPress={_onPress}>
          <CloseButtonText>close</CloseButtonText>
        </CloseButton>
      </ContentWrapper>
    </Container>
  );
};

export default UserModal;
