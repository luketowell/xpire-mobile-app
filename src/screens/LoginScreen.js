import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import MainStyles from '../Assets/styles/MainStyles';
import { connect } from 'react-redux';
import { authUser } from '../redux/action/authActions';
import { getStores, getStatuses } from '../redux/action/configActions';
import LoginStyles from '../Assets/styles/pages/LoginStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

class LoginScreen extends Component {
    componentDidMount() {
        this.props.getStores();
        this.props.getStatuses();
    }

    render() {
        return (
            <View style={MainStyles.container}>
                <View style={LoginStyles.imageContainer}>
                    <Image
                        source={require('../Assets/images/logo.png')}
                        style={LoginStyles.image}
                    />
                </View>
                <View style={LoginStyles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => this.props.authUser()}
                        style={LoginStyles.button}>
                        <Text style={LoginStyles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        config: state.config,
    };
};

export default connect(mapStateToProps, { authUser, getStores, getStatuses })(
    LoginScreen
);
