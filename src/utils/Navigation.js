import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import Header from '../components/Header';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const Drawer = createDrawerNavigator();

class Navigation extends Component {
    render() {
        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={HomeScreen} />
                    <Drawer.Screen name="Details" component={DetailsScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}

export default Navigation;
