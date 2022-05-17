import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
//import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

export default MainNavigator = () => {
    return (
      <Drawer.Navigator
        initialRouteName="app">
        <Drawer.Screen name="app" component={StackNavigation} />
      </Drawer.Navigator>
    );
  };