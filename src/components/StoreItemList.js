import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import StoreItemCard from '../screens/StoreItemCard';

class StoreItemList extends Component {
    renderStoreItems() {
        const { navigation, storeItems } = this.props;
        console.log(this.props);

        if (storeItems.length === 0) {
            return <View>There are no Store items for this category</View>;
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
            <ScrollView
                style={{
                    backgroundColor: '#FFFFE5',
                    alignSelf: 'stretch',
                    margin: 10,
                    paddingTop: 5,
                    borderColor: 'black',
                    borderWidth: 2,
                    borderRadius: 6,
                    shadowColor: 'black',
                    shadowOpacity: 0.6,
                    shadowOffset: { height: 4, width: 2 },
                    shadowRadius: 8,
                }}>
                {this.renderStoreItems()}
            </ScrollView>
        );
    }
}

export default StoreItemList;
