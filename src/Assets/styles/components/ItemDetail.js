const { StyleSheet } = require('react-native');
import { secondaryYellow, primaryGreen } from '../variables/variables';

const ItemDetailStyle = StyleSheet.create({
    container: {
        flex: 0.95,
    },
    imageContainer: {
        marginTop: 25,
        paddingTop: 10,
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
        marginTop: 30,
        paddingTop: 10,
        flex: 0.4,
        justifyContent: 'center',
    },
    detailsContainer: {
        flex: 0.5,
    },
});

export default ItemDetailStyle;
