import React, { Fragment } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import MainStyles from '../Assets/styles/MainStyles';
import { LargeText, SmallText, MediumText } from '../components/Text';
import HomeStyles from '../Assets/styles/pages/HomeStyles';
import CategoryList from '../components/CategoryList';
import { primaryGreen } from '../Assets/styles/variables/variables';

function HomeScreen({ navigation }) {
    return (
        <Fragment>
            <SafeAreaView style={MainStyles.top} />
            <SafeAreaView style={MainStyles.container}>
                <Header navigation={navigation} />
                <View style={HomeStyles.PageText}>
                    <LargeText>
                        <Text>Welcome to Xpire!</Text>
                    </LargeText>
                    <SmallText>
                        <Text>The waste reduction application.</Text>
                    </SmallText>
                    <View style={{ marginTop: 20 }}>
                        <MediumText>
                            <Text>
                                How would you like to check stock expiry:
                            </Text>
                        </MediumText>
                    </View>
                    <View style={{ paddingBottom: 20 }}>
                        <MediumText align={'left'}>By Barcode:</MediumText>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Scanner');
                            }}
                            style={{
                                marginTop: 10,
                                backgroundColor: primaryGreen,
                                alignSelf: 'center',
                                paddingHorizontal: 40,
                                paddingVertical: 15,
                                borderWidth: 2,
                                borderColor: 'black',
                                borderRadius: 6,
                                flexDirection: 'row',
                            }}>
                            <Text>Scan</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <MediumText align={'left'}>By Category:</MediumText>
                    </View>
                </View>
                <View style={{ flex: 0.5 }}>
                    <CategoryList navigation={navigation} />
                </View>
            </SafeAreaView>
        </Fragment>
    );
}

export default HomeScreen;
