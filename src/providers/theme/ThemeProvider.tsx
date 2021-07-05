import React, {useEffect, useCallback, FunctionComponent} from 'react';
import {ThemeProvider as Provider, DefaultTheme} from 'styled-components';
import {Appearance, StatusBar} from 'react-native';
import {hexToRGB, scale} from '@utils';
import {FONTS, DARK_MODE_COLORS, LIGHT_MODE_COLORS} from './theme';

const ThemeProvider: FunctionComponent = ({children}) => {
  // Get the phone-color mode [if it's dark or light mode]
  const isDarkMode = false;

  // Toggle app theme
  const toggleTheme = useCallback(() => {}, []);

  // Conditionally change the theme-color from dark to light-mode and vise-versa
  const theme: DefaultTheme = {
    scale,
    hexToRGB,
    isDarkMode,
    toggleTheme,
    fonts: FONTS,
    colors: isDarkMode ? DARK_MODE_COLORS : LIGHT_MODE_COLORS,
  };

  useEffect(() => {
    const listener: Appearance.AppearanceListener = ({}) => {};
    Appearance.addChangeListener(listener);
    return () => Appearance.removeChangeListener(listener);
  }, []);

  return (
    <Provider theme={theme}>
      <StatusBar
        backgroundColor={theme.colors.BACKGROUND}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      {children}
    </Provider>
  );
};

export default ThemeProvider;
