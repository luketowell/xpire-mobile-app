import React, { PureComponent, Fragment } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Header from '../components/Header';
import MainStyles from '../Assets/styles/MainStyles';
import LoadingSpinner from '../components/LoadingSpinner';

class ScannerScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isBarcodeRead: false,
        };
    }

    render() {
        return (
            <Fragment>
                <SafeAreaView style={MainStyles.top} />
                <SafeAreaView style={MainStyles.container}>
                    <Header title="Scanner" />
                    <View style={styles.container}>
                        <RNCamera
                            ref={(ref) => {
                                this.camera = ref;
                            }}
                            style={styles.preview}
                            type={RNCamera.Constants.Type.back}
                            flashMode={RNCamera.Constants.FlashMode.on}
                            androidCameraPermissionOptions={{
                                title: 'Permission to use camera',
                                message:
                                    'We need your permission to use your camera',
                                buttonPositive: 'Ok',
                                buttonNegative: 'Cancel',
                            }}
                            androidRecordAudioPermissionOptions={{
                                title: 'Permission to use audio recording',
                                message:
                                    'We need your permission to use your audio',
                                buttonPositive: 'Ok',
                                buttonNegative: 'Cancel',
                            }}
                            // onGoogleVisionBarcodesDetected={({ barcodes }) => {
                            //     console.log(barcodes);
                            // }}
                            onBarCodeRead={(barcode) => {
                                this.setState({ isBarcodeRead: true });
                                if (!this.state.isBarcodeRead) {
                                    console.log(barcode.data);
                                }
                            }}
                        />
                        <View style={{ flex: 0.6 }}>
                            {/* //barcode scanner results */}
                        </View>
                    </View>
                </SafeAreaView>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 0.3,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});

export default ScannerScreen;
