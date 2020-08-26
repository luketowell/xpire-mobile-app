import React from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';
import HeaderStyles from '../Assets/styles/components/HeaderStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header({ navigation, title = '' }) {
    return (
        <View style={HeaderStyles.container}>
            <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={HeaderStyles.menuButton}>
                <FontAwesomeIcon icon={faBars} size={26} />
            </TouchableOpacity>
            <View style={HeaderStyles.title}>
                <Text style={HeaderStyles.titleText}>{title}</Text>
            </View>
            <View style={HeaderStyles.rightSide}></View>
        </View>
    );
}

export default Header;
