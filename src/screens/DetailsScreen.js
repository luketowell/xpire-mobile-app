import React, { Fragment } from 'react';
import { SafeAreaView, Text } from 'react-native';
import MainStyles from '../Assets/styles/MainStyles';
import Header from '../components/Header';

function DetailsScreen({ navigation }) {
    return (
        <Fragment>
            <SafeAreaView style={MainStyles.top} />
            <SafeAreaView style={MainStyles.container}>
                <Header navigation={navigation} title="Expiring Items" />
                <Text>Details Screen</Text>
            </SafeAreaView>
        </Fragment>
    );
}

export default DetailsScreen;
