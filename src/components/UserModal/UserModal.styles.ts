import {Dimensions} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import styled from 'styled-components/native';
import {TABLET_DIMENSION} from '@app/constants';

const {width: FULL_WIDTH, height: FULL_HEIGHT} = Dimensions.get('window');

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  flex: 1;
  width: ${p => p.theme.scale(FULL_WIDTH)}px;
  height: ${p => p.theme.scale(FULL_HEIGHT)}px;
  background-color: ${p => p.theme.hexToRGB(p.theme.colors.BLACK, 0.4)};
`;

export const ContentWrapper = styled(BlurView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text.attrs({
  adjustsFontSizeToFit: true,
  allowFontScaling: true,
})`
  color: ${p => p.theme.colors.GRAY_FOUR};
  font-size: ${p => p.theme.scale(15)}px;
  line-height: ${p => p.theme.scale(22)}px;
`;

export const Phone = styled(Text)`
  font-size: ${p => p.theme.scale(13)}px;
  margin-horizontal: ${p => p.theme.scale(7)}px;
`;

export const CloseButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: ${p => p.theme.scale(5)}px;
  margin-vertical: ${p => p.theme.scale(15)}px;
  padding-vertical: ${p => p.theme.scale(20)}px;
  width: ${p => p.theme.scale(TABLET_DIMENSION - 100)}px;
  background-color: ${p => p.theme.colors.WHITE};
`;

export const Label = styled(Text)`
  text-transform: capitalize;
  color: ${p => p.theme.colors.GRAY_ONE};
  margin-right: ${p => p.theme.scale(10)}px;
`;

export const CloseButtonText = styled(Text)`
  text-transform: capitalize;
  font-size: ${p => p.theme.scale(20)}px;
  line-height: ${p => p.theme.scale(21)}px;
`;

export const Avatar = styled.Image`
  width: ${p => p.theme.scale(80)}px;
  height: ${p => p.theme.scale(80)}px;
  border-radius: ${p => p.theme.scale(80 / 2)}px;
`;

export const AvatarRing = styled.View`
  align-items: center;
  justify-content: center;
  width: ${p => p.theme.scale(90)}px;
  height: ${p => p.theme.scale(90)}px;
  margin-bottom: ${p => p.theme.scale(8)}px;
  border: 1px
    ${p =>
      p.theme.isDarkMode ? p.theme.colors.GRAY_TWO : p.theme.colors.WHITE}
    solid;
  border-radius: ${p => p.theme.scale(90 / 2)}px;
`;

export const ModalTop = styled.View`
  align-items: center;
  margin-bottom: ${p => p.theme.scale(10)}px;
`;

export const ModalBottom = styled.View``;

export const Row = styled.View<{last?: boolean}>`
  flex-direction: row;
  align-items: center;
  padding-vertical: ${p => p.theme.scale(12)}px;
  border-bottom-width: ${p => (p.last ? 0 : 1)}px;
  border-bottom-color: ${p =>
    p.theme.isDarkMode ? p.theme.colors.GRAY_TWO : p.theme.colors.GRAY_FIVE};
`;

export const RowWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-left: ${p => p.theme.scale(20)}px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Modal = styled.View.attrs({elevation: 2})`
  padding: ${p => p.theme.scale(20)}px;
  padding-bottom: ${p => p.theme.scale(10)}px;
  border-radius: ${p => p.theme.scale(10)}px;
  background-color: ${p => p.theme.colors.GRAY_SIX};
  width: ${p => p.theme.scale(TABLET_DIMENSION - 90)}px;
  height: ${p => p.theme.scale(TABLET_DIMENSION - 90)}px;
  box-shadow: 0px 2px 8px ${p => p.theme.hexToRGB(p.theme.colors.BLACK, 0.15)};
`;
