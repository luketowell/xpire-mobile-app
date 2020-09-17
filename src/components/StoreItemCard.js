import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import StoreItemCardStyle from '../Assets/styles/components/StoreItemCardStyle';
import { SmallText } from '../components/Text';

class StoreItemCard extends Component {
    render() {
        const { storeItem, navigation } = this.props;
        return (
            <TouchableOpacity
                style={StoreItemCardStyle.container}
                onPress={() => {
                    navigation.navigate('Details', {
                        id: storeItem.id,
                        newItem: false,
                    });
                }}>
                <View>
                    <Image
                        source={{ uri: storeItem.img_url }}
                        style={StoreItemCardStyle.image}
                    />
                </View>
                <View style={StoreItemCardStyle.textContainer}>
                    <SmallText>
                        <Text style={{ textAlign: 'left' }}>
                            Name: {storeItem.name}
                            {'\n'}
                        </Text>
                        <Text style={{ textAlign: 'left' }}>
                            Expiry Date:{' '}
                            {new Date(storeItem.expiry_date).toDateString()}
                            {'\n'}
                        </Text>
                        <Text style={{ textAlign: 'left' }}>
                            UPC: {storeItem.item_upc}
                        </Text>
                    </SmallText>
                </View>
            </TouchableOpacity>
        );
    }
}

export default StoreItemCard;
