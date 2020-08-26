import { StyleSheet } from 'react-native';

const LoginStyles = StyleSheet.create({
    imageContainer: {
        flex: 0.7,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 200,
        width: 200,
        resizeMode: 'contain',
    },
    buttonContainer: {
        flex: 0.3,
        alignItems: 'center',
    },
    button: {
        width: 150,
        paddingHorizontal: 10,
        paddingVertical: 15,
        alignItems: 'center',
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 2, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 3, //IOS
        backgroundColor: '#fff',
        elevation: 3,
    },
    buttonText: {
        fontSize: 24,
    },
});

export default LoginStyles;
