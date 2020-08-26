import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import LoginScreen from '../screens/LoginScreen';
import LoadingScreen from '../screens/LoadingScreen';

const Drawer = createDrawerNavigator();

function AuthedLinks() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Details" component={DetailsScreen} />
        </Drawer.Navigator>
    );
}

function UnauthedLinks() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Login" component={LoginScreen} />
            <Drawer.Screen name="Loading" component={LoadingScreen} />
        </Drawer.Navigator>
    );
}

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authed: false,
        };
    }

    render() {
        console.log(this.state.authed);
        return (
            <NavigationContainer>
                {this.state.authed ? <AuthedLinks /> : <UnauthedLinks />}
            </NavigationContainer>
        );
    }
}

export default Navigation;
