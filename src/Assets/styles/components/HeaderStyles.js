import { StyleSheet } from 'react-native';

const HeaderStyle = StyleSheet.create({
    container: {
        flex: 0.06,
        flexDirection: 'row',
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
