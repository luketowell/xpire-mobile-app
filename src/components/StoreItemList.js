import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import StoreItemCard from './StoreItemCard';
import StoreItemListStyle from '../Assets/styles/components/StoreItemListStyle';
import { MediumText } from './Text';

class StoreItemList extends Component {
    renderStoreItems() {
        const { navigation, storeItems } = this.props;

        if (storeItems.length === 0) {
            return (
                <View>
                    <MediumText>
                        There are no store items {'\n'}for this category
                    </MediumText>
                </View>
            );
        } else {
            return storeItems.map((storeItem, index) => (
                <View key={index}>
                    <StoreItemCard
                        storeItem={storeItem}
                        navigation={navigation}
                    />
                </View>
            ));
        }
    }

    render() {
        return (
            <ScrollView style={StoreItemListStyle.container}>
                {this.renderStoreItems()}
            </ScrollView>
        );
    }
}

export default StoreItemList;
