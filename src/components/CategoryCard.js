import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { MediumText } from './Text';
import CategoryCardStyle from '../Assets/styles/components/CategoryCardStyle';

const CategoryCard = ({ category, navigation }) => {
    return (
        <View style={CategoryCardStyle.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Items', { category })}
                style={CategoryCardStyle.clickableArea}>
                <View style={CategoryCardStyle.imageContainer}>
                    <Image
                        source={{ uri: category.image_url }}
                        style={CategoryCardStyle.image}
                    />
                </View>
                <MediumText>{category.name}</MediumText>
            </TouchableOpacity>
        </View>
    );
};
export default CategoryCard;
