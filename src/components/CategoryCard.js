import React from 'react';
import { View, Text, Image } from 'react-native';
import { MediumText } from './Text';

const CategoryCard = ({ category }) => {
    return (
        <View style={{ flex: 0.5, paddingBottom: 20 }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingBottom: 10,
                }}>
                <Image
                    source={{ uri: category.image_url }}
                    style={{
                        height: 100,
                        width: 100,
                    }}
                />
            </View>
            <MediumText>{category.name}</MediumText>
        </View>
    );
};
export default CategoryCard;
