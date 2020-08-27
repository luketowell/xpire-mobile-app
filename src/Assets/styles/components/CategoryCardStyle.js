import { StyleSheet } from 'react-native';

const CategoryCardStyle = StyleSheet.create({
    container: { flex: 0.5, paddingBottom: 20 },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 10,
    },
    image: {
        height: 100,
        width: 100,
    },
    clickableArea: { marginHorizontal: 100 },
});

export default CategoryCardStyle;
