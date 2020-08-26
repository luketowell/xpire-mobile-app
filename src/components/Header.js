import React from 'react';
import { View, Button } from 'react-native';

function Header({ navigation }) {
    return (
        <View>
            <Button onPress={() => navigation.toggleDrawer()} title="drawer" />
        </View>
    );
}

export default Header;
