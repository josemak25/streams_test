import styled, {DefaultTheme} from 'styled-components/native';

export const Text = styled.Text.attrs({
  adjustsFontSizeToFit: true,
  allowFontScaling: true,
})`
  text-align: center;
  color: ${p => p.theme.colors.BLACK};
  font-size: ${p => p.theme.scale(16)}px;
  line-height: ${p => p.theme.scale(22)}px;
`;

export const EmptyStateContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-horizontal: ${p => p.theme.scale(30)}px;
  background-color: ${p => p.theme.colors.BACKGROUND};
`;

export const ReloadScreenButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: ${p => p.theme.scale(52)}px;
  margin-vertical: ${p => p.theme.scale(30)}px;
  border: 1px ${p => p.theme.colors.BLUE} solid;
`;

export const ReloadScreenText = styled(Text)`
  font-weight: bold;
  text-transform: uppercase;
  color: ${p => p.theme.colors.BLUE};
  font-size: ${p => p.theme.scale(14)}px;
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs(
  (p: {theme: DefaultTheme}) => ({
    size: 'large',
    color: p.theme.colors.GREEN,
  }),
)`
  margin-vertical: ${p => p.theme.scale(16)}px;
`;
