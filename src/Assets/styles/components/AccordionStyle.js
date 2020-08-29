import { StyleSheet } from 'react-native';
import { secondaryYellow, tertiaryYellow } from '../variables/variables';

const AccordionStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 56,
        paddingLeft: 25,
        paddingRight: 18,
        alignItems: 'center',
        backgroundColor: secondaryYellow,
    },
    accordionHeader: {
        height: 1,
        color: 'white',
        width: '100%',
    },
    dropDownContainer: {
        backgroundColor: tertiaryYellow,
        padding: 16,
    },
});

export default AccordionStyles;
