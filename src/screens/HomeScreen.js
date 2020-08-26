import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';

function HomeScreen({ navigation }) {
    return (
        <View>
            <Header navigation={navigation} />
            <Text>Home Screen</Text>
        </View>
    );
}

export default HomeScreen;
