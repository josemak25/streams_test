import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.BACKGROUND};
`;

export const Button = styled.TouchableOpacity`
  margin-top: 15px;
  padding-vertical: 15px;
`;

export const Title = styled.Text.attrs({
  adjustsFontSizeToFit: true,
  allowFontScaling: true,
})`
  text-align: center;
  color: ${p => p.theme.colors.BLUE};
  font-size: ${p => p.theme.scale(25)}px;
  line-height: ${p => p.theme.scale(26)}px;
`;

export const Subtitle = styled(Title)`
  color: ${p => p.theme.colors.BLACK};
  font-size: ${p => p.theme.scale(18)}px;
  margin-top: ${p => p.theme.scale(30)}px;
  line-height: ${p => p.theme.scale(21)}px;
  margin-vertical: ${p => p.theme.scale(15)}px;
`;
