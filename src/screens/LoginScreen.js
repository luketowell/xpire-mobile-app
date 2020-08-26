import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import MainStyles from '../Assets/styles/MainStyles';
import { connect } from 'react-redux';
import { authUser } from '../redux/action/authActions';

class LoginScreen extends Component {
    render() {
        return (
            <View style={MainStyles.Container}>
                <Text>Login Screen</Text>
                <Image source={require('../Assets/images/logo.png')} />
                <Button onPress={() => this.props.authUser()} title="Login" />
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};

export default connect(mapStateToProps, { authUser })(LoginScreen);
