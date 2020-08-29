import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { LargeText, MediumText } from './Text';
import ItemDetailStyle from '../Assets/styles/components/ItemDetail';

function ItemDetail({ details }) {
    console.log(details);
    return (
        <View style={ItemDetailStyle.container}>
            <View style={ItemDetailStyle.imageContainer}>
                <Image
                    source={{ uri: details.img_url }}
                    style={ItemDetailStyle.image}
                />
            </View>
            <View style={ItemDetailStyle.nameContainer}>
                <LargeText>
                    <Text style={{ textAlign: 'center', flexWrap: 'wrap' }}>
                        {details.name}
                    </Text>
                </LargeText>
            </View>
            <View style={ItemDetailStyle.detailsContainer}>
                <ScrollView style={ItemDetailStyle.detailsScrollView}>
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
