const { StyleSheet } = require('react-native');
import { secondaryYellow } from '../variables/variables';

const ItemDetailStyle = StyleSheet.create({
    container: {
        flex: 0.7,
    },
    imageContainer: {
        flex: 0.4,
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
        flex: 0.17,
        justifyContent: 'center',
    },
    detailsContainer: {
        flex: 0.43,
    },
    detailsScrollView: {
        backgroundColor: secondaryYellow,
        padding: 10,
        marginHorizontal: 10,
    },
});

export default ItemDetailStyle;
