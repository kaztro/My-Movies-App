import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';

import HomeScreen from '../screens/HomeScreen.tsx';
import DetailsScreen from '../screens/DetailsScreen.tsx';

const Stack = createStackNavigator();

export default function StackNavigation(props) {
    const { navigation } = props;

    const buttonLeft = (screen = 'not') => {
        if (screen == 'search' || screen == 'details')
            return (
                <IconButton
                    icon="arrow-left"
                    onPress={() => navigation.goBack()}
                    color="#FFF"
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
                name="home"
                component={HomeScreen}
                options={{
                    title: '',
                    headerLeft: () => buttonLeft(),
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
