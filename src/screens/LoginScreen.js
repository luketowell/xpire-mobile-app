import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class LoginScreen extends Component {
    render() {
        return (
            <View>
                <Text>Login Screen</Text>
                <Button onPress={() => console.log('clicked!')} title="Login" />
            </View>
        );
    }
}

export default LoginScreen;
