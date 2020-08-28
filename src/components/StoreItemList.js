import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import StoreItemCard from '../screens/StoreItemCard';
import StoreItemListStyle from '../Assets/styles/components/StoreItemListStyle';

class StoreItemList extends Component {
    renderStoreItems() {
        const { navigation, storeItems } = this.props;

        if (storeItems.length === 0) {
            return (
                <View>
                    <Text>There are no Store items for this category</Text>
                </View>
            );
        } else {
            return storeItems.map((storeItem) => (
                <View>
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
