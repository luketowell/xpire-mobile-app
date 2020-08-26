import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import MainStyles from '../Assets/styles/MainStyles';
import Header from '../components/Header';

function DetailsScreen({ navigation }) {
    return (
        <SafeAreaView style={MainStyles.Container}>
            <Header navigation={navigation} title="Expiring Items" />
            <Text>Details Screen</Text>
        </SafeAreaView>
    );
}

export default DetailsScreen;
