import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { LargeText, MediumText } from './Text';
import ItemDetailStyle from '../Assets/styles/components/ItemDetail';
import Accordion from './Accordion';
import Action from './Action';
import { primaryGreen } from '../Assets/styles/variables/variables';

import ActionModal from './ActionModal';

const renderActions = (actions) => {
    if (actions.length > 0) {
        return (
            <Accordion title="Previous Actions">
                {actions.map((action, index) => {
                    return <Action action={action} key={index} />;
                })}
            </Accordion>
        );
    } else {
        return null;
    }
};

function ItemDetail({ details, actions }) {
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
            <ScrollView style={ItemDetailStyle.detailsContainer}>
                <Accordion title="Item Details">
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
                </Accordion>
                {renderActions(actions)}

                <ActionModal />
            </ScrollView>
        </View>
    );
}

export default ItemDetail;
