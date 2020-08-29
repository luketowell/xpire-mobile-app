import { MediumText } from '../components/Text';
import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import StoreItemCardStyle from '../Assets/styles/components/StoreItemCardStyle';

class StoreItemCard extends Component {
    render() {
        const { storeItem, navigation } = this.props;
        return (
            <TouchableOpacity
                style={StoreItemCardStyle.container}
                onPress={() => {
                    navigation.navigate('Details', { id: storeItem.id });
                }}>
                <View>
                    <Image
                        source={{ uri: storeItem.img_url }}
                        style={StoreItemCardStyle.image}
                    />
                </View>
                <View style={StoreItemCardStyle.textContainer}>
                    <MediumText>
                        <Text style={{ textAlign: 'left' }}>
                            Name: {storeItem.name}
                            {'\n'}
                        </Text>
                        <Text style={{ textAlign: 'left' }}>
                            UPC: {storeItem.item_upc}
                        </Text>
                    </MediumText>
                </View>
            </TouchableOpacity>
        );
    }
}

export default StoreItemCard;
