import React, {FunctionComponent} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from './theme';

export const GlobalProvider: FunctionComponent<{}> = ({children}) => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>{children}</SafeAreaProvider>
    </ThemeProvider>
  );
};
