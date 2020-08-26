import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Header from '../components/Header';
import MainStyles from '../Assets/styles/MainStyles';

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={MainStyles.Container}>
            <Header navigation={navigation} />
            <Text>Home Screen</Text>
        </SafeAreaView>
    );
}

export default HomeScreen;
