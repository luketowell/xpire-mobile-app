import { StyleSheet, Platform } from 'react-native';
import { primaryGreen } from '../variables/variables';

const HeaderStyle = StyleSheet.create({
    container: {
        flex: 0.06,
        flexDirection: 'row',
        backgroundColor: primaryGreen,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOpacity: 0.6,
                shadowOffset: { height: 4, width: 2 },
                shadowRadius: 2,
                overflow: 'visible',
            },
            android: {
                shadowColor: 'black',
                shadowOpacity: 1,
                shadowOffset: { height: 2, width: 2 },
                shadowRadius: 8,
                elevation: 10,
            },
        }),
    },
    menuButton: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightSide: {
        flex: 0.2,
    },
    titleText: {
        fontSize: 24,
    },
});

export default HeaderStyle;
