import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import MainStyles from '../styles/MainStyles';

class LoginScreen extends Component {
    render() {
        return (
            <View style={MainStyles.Container}>
                <Text>Login Screen</Text>
                <Button onPress={() => console.log('clicked!')} title="Login" />
            </View>
        );
    }
}

export default LoginScreen;
