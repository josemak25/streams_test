import React, {FunctionComponent} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from './theme';
import {StoreProvider} from './store';

export const GlobalProvider: FunctionComponent<{}> = ({children}) => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <SafeAreaProvider>{children}</SafeAreaProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};
