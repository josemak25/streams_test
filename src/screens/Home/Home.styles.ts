import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
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
  color: #000;
  font-size: 25px;
  line-height: 26px;
`;

export const Subtitle = styled(Title)`
  color: #000;
  font-size: 18px;
  margin-top: 30px;
  line-height: 21px;
  margin-vertical: 15px;
`;
