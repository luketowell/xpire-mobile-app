const { StyleSheet } = require('react-native');
import { secondaryYellow } from '../variables/variables';

const ItemDetailStyle = StyleSheet.create({
    container: {
        flex: 0.95,
    },
    imageContainer: {
        paddingTop: 10,
        flex: 0.45,
        justifyContent: 'center',
    },
    image: {
        height: 200,
        width: 200,
        resizeMode: 'contain',
        alignSelf: 'center',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
    },
    nameContainer: {
        flex: 0.3,
        justifyContent: 'center',
    },
    detailsContainer: {
        flex: 0.6,
        overflow: 'hidden',
    },
});

export default ItemDetailStyle;
