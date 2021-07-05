import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-vertical: 5px;
  height: ${p => p.theme.scale(60)}px;
  padding-vertical: ${p => p.theme.scale(5)}px;
  background-color: ${p => p.theme.colors.BACKGROUND};
`;

export const ContentWrapper = styled.View`
  flex: 1;
  justify-content: center;
  border-bottom-width: 1px;
  height: ${p => p.theme.scale(60)}px;
  border-bottom-color: ${p => p.theme.colors.GRAY_SIX};
`;

export const Name = styled.Text.attrs({
  adjustsFontSizeToFit: true,
  allowFontScaling: true,
})`
  color: ${p => p.theme.colors.BLACK};
  font-size: ${p => p.theme.scale(15)}px;
  line-height: ${p => p.theme.scale(22)}px;
`;

export const Phone = styled(Name)`
  font-size: ${p => p.theme.scale(15)}px;
  line-height: ${p => p.theme.scale(21)}px;
`;

export const Avatar = styled.Image`
  width: ${p => p.theme.scale(50)}px;
  height: ${p => p.theme.scale(50)}px;
  margin-horizontal: ${p => p.theme.scale(15)}px;
  border-radius: ${p => p.theme.scale(50 / 2)}px;
`;
