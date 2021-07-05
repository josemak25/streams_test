import React, {useEffect, useCallback, FunctionComponent} from 'react';
import {ThemeProvider as Provider, DefaultTheme} from 'styled-components';
import {Appearance, StatusBar} from 'react-native';
import {hexToRGB, scale} from '@utils';
import {FONTS, DARK_MODE_COLORS, LIGHT_MODE_COLORS} from './theme';
import {setColorMode} from '../store/settings/actions';
import {useSelector, useStore} from '../store';
import {IColorMode} from '../store/settings/models';

const ThemeProvider: FunctionComponent = ({children}) => {
  // Get the phone-color mode [if it's dark or light mode]
  const {dispatch} = useStore();
  const {colorMode} = useSelector(({settings}) => settings);

  const isDarkMode = colorMode === IColorMode.DARK;

  // Toggle app theme
  const toggleTheme = useCallback(() => {
    const colorScheme = isDarkMode ? IColorMode.LIGHT : IColorMode.DARK;
    dispatch(setColorMode(colorScheme));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkMode]);

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
    const listener: Appearance.AppearanceListener = ({colorScheme}) => {
      return dispatch(setColorMode(colorScheme as IColorMode));
    };

    Appearance.addChangeListener(listener);
    return () => Appearance.removeChangeListener(listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
