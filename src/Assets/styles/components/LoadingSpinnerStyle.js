const { StyleSheet } = require('react-native');
import { primaryGreen } from '../variables/variables';

const LoadingSpinnerStyle = StyleSheet.create({
    iconContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    icon: {
        color: primaryGreen,
    },
});

export default LoadingSpinnerStyle;
