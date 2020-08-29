import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { LargeText, MediumText } from './Text';

function ItemDetail({ details }) {
    console.log(details);
    return (
        <View style={{ flex: 0.7 }}>
            <View
                style={{
                    flex: 0.4,
                    justifyContent: 'center',
                }}>
                <Image
                    source={{ uri: details.img_url }}
                    style={{
                        height: 200,
                        width: 200,
                        resizeMode: 'contain',
                        alignSelf: 'center',
                        borderColor: 'black',
                        borderWidth: 2,
                        borderRadius: 5,
                    }}
                />
            </View>
            <View style={{ flex: 0.17, justifyContent: 'center' }}>
                <LargeText>
                    <Text style={{ textAlign: 'center', flexWrap: 'wrap' }}>
                        {details.name}
                    </Text>
                </LargeText>
            </View>
            <View style={{ flex: 0.43 }}>
                <ScrollView
                    style={{
                        padding: 10,

                        marginHorizontal: 10,
                    }}>
                    <MediumText align={'left'}>
                        <Text>
                            Size: {details.size}
                            {'\n'}
                        </Text>
                        <Text>
                            Quantity: {details.upc}
                            {'\n'}
                        </Text>
                        <Text>Description:{'\n'}</Text>
                        <Text>{details.description}</Text>
                    </MediumText>
                </ScrollView>
            </View>
        </View>
    );
}

export default ItemDetail;
