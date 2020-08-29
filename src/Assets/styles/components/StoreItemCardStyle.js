import { Platform, StyleSheet } from 'react-native';

const StoreItemCardStyle = StyleSheet.create({
    container: {
        flex: 0.2,
        flexDirection: 'row',
        backgroundColor: '#FFFFCC',
        margin: 5,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 4,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOpacity: 0.6,
                shadowOffset: { height: 2, width: 2 },
                shadowRadius: 3,
            },
            android: {
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 6,
                },
                shadowOpacity: 0.39,
                shadowRadius: 8.3,
                elevation: 13,
            },
        }),
    },
    image: {
        height: 75,
        width: 75,
        resizeMode: 'contain',
    },
    textContainer: {
        marginLeft: 10,
        justifyContent: 'center',
    },
});

export default StoreItemCardStyle;
