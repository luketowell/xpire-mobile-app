import { StyleSheet, Platform } from 'react-native';

const StoreItemListStyle = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFE5',
        alignSelf: 'stretch',
        margin: 10,
        paddingTop: 5,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 6,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOpacity: 0.6,
                shadowOffset: { height: 4, width: 2 },
                shadowRadius: 8,
                overflow: 'visible',
            },
            android: {
                shadowColor: 'black',
                shadowOpacity: 1,
                shadowOffset: { height: 2, width: 2 },
                shadowRadius: 8,
                elevation: 13,
            },
        }),
    },
});

export default StoreItemListStyle;
