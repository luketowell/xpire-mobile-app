import React from 'react';
import { View, Text, Image } from 'react-native';
import { MediumText } from './Text';
import CategoryCardStyle from '../Assets/styles/components/CategoryCardStyle';

const CategoryCard = ({ category }) => {
    return (
        <View style={CategoryCardStyle.container}>
            <View style={CategoryCardStyle.imageContainer}>
                <Image
                    source={{ uri: category.image_url }}
                    style={CategoryCardStyle.image}
                />
            </View>
            <MediumText>{category.name}</MediumText>
        </View>
    );
};
export default CategoryCard;
