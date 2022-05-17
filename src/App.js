/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import MainNavigator from './navigation/MainNavigator';
 import { NavigationContainer } from '@react-navigation/native';
 import { ModalPortal } from 'react-native-modals';
 import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

 DefaultTheme.colors.text = '#FFF';

 const App = () => {
  return (
    <PaperProvider theme={DefaultTheme}>
      <NavigationContainer>
        <MainNavigator />
        <ModalPortal />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;