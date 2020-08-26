import React, { Fragment } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Header from '../components/Header';
import MainStyles from '../Assets/styles/MainStyles';
import BigText from '../components/BigText';

function HomeScreen({ navigation }) {
    return (
        <Fragment>
            <SafeAreaView style={MainStyles.top} />
            <SafeAreaView style={MainStyles.container}>
                <Header navigation={navigation} />
                <View style={{ flex: 0.3, backgroundColor: 'blue' }}>
                    <BigText text="Welcome to Xpire!" />
                </View>
                <View style={{ flex: 0.6, backgroundColor: 'red' }}></View>
            </SafeAreaView>
        </Fragment>
    );
}

export default HomeScreen;
