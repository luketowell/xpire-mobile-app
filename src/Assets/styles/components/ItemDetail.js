const { StyleSheet } = require('react-native');
import { secondaryYellow, primaryGreen } from '../variables/variables';

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
    addActionButton: {
        marginTop: 10,
        backgroundColor: primaryGreen,
        alignSelf: 'center',
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 6,
        flexDirection: 'row',
    },
    buttonIcon: { alignSelf: 'center', marginRight: 5 },
});

export default ItemDetailStyle;
