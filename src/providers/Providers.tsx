import React, {FunctionComponent} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from './theme';
import {StoreProvider} from './store';
import {OverlayProvider} from './overlay';

export const GlobalProvider: FunctionComponent<{}> = ({children}) => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <SafeAreaProvider>{children}</SafeAreaProvider>
        <OverlayProvider />
      </ThemeProvider>
    </StoreProvider>
  );
};
