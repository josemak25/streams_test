/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigation from './src/navigation';
import {GlobalProvider} from './src/providers';

const App = () => {
  return (
    <GlobalProvider>
      <Navigation />
    </GlobalProvider>
  );
};

export default App;
