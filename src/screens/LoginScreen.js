import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import MainStyles from '../styles/MainStyles';
import { connect } from 'react-redux';
import { authUser } from '../redux/action/authActions';

class LoginScreen extends Component {
    render() {
        return (
            <View style={MainStyles.Container}>
                <Text>Login Screen</Text>
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
