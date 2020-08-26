import React, { Fragment } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Header from '../components/Header';
import MainStyles from '../Assets/styles/MainStyles';
import { LargeText, SmallText, MediumText } from '../components/Text';

function HomeScreen({ navigation }) {
    return (
        <Fragment>
            <SafeAreaView style={MainStyles.top} />
            <SafeAreaView style={MainStyles.container}>
                <Header navigation={navigation} />
                <View
                    style={{
                        flex: 0.3,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <LargeText>
                        <Text>Welcome to Xpire!</Text>
                    </LargeText>
                    <SmallText>
                        <Text>The waste reduction application.</Text>
                    </SmallText>
                    <View style={{ marginTop: 40 }}>
                        <MediumText>
                            <Text>
                                Please choose the department {'\n'} which you
                                would like to check today
                            </Text>
                        </MediumText>
                    </View>
                </View>
                <View style={{ flex: 0.6 }}></View>
            </SafeAreaView>
        </Fragment>
    );
}

export default HomeScreen;
