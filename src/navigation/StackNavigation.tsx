import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SplashScreen from '../screens/SplashScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();

export default function StackNavigation(props) {
    const { navigation } = props;

    const buttonLeft = (screen = 'not') => {
        if (screen == 'search' || screen == 'details')
            return (
                <IconButton
                    icon="arrow-left"
                    onPress={() => navigation.goBack()}
                    color="#323F5E"
                />
            );
    };

    const buttonRight = () => {
        return (
            <IconButton
                icon="magnify"
                onPress={() => navigation.navigate('search')}
                color="#4E73DF"
            />
        );
    };

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="splash"
                component={SplashScreen}
                options={{
                    title: '',
                    headerShown: false,
                    headerLeft: () => buttonLeft(),
                }}
            />
            <Stack.Screen
                name="home"
                component={HomeScreen}
                options={{
                    title: '',
                    headerRight: () => buttonRight(),
                    headerLeft: () => buttonLeft(),
                }}

            />
            <Stack.Screen
                name="search"
                component={SearchScreen}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerLeft: () => buttonLeft('search'),
                }}
            />
            <Stack.Screen
                name="details"
                component={DetailsScreen}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerLeft: () => buttonLeft('details'),
                }}
            />
        </Stack.Navigator>
    );
}
