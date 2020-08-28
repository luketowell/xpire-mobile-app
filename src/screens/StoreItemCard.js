import { MediumText } from '../components/Text';
import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

class StoreItemCard extends Component {
    render() {
        const { storeItem } = this.props;
        return (
            <TouchableOpacity
                style={{
                    flex: 0.2,
                    flexDirection: 'row',
                    backgroundColor: '#FFFFCC',
                    marginHorizontal: 5,
                    borderColor: 'black',
                    borderWidth: 2,
                    borderRadius: 6,
                    shadowColor: 'black',
                    shadowOpacity: 0.6,
                    shadowOffset: { height: 4, width: 2 },
                    shadowRadius: 8,
                }}>
                <View>
                    <Image
                        source={{ uri: storeItem.img_url }}
                        style={{ height: 75, width: 75, resizeMode: 'contain' }}
                    />
                </View>
                <View style={{ marginLeft: 10, justifyContent: 'center' }}>
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
