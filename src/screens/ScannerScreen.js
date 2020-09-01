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
import {
    secondaryGreen,
    secondaryYellow,
    primaryGreen,
} from '../Assets/styles/variables/variables';
import { MediumText } from '../components/Text';
import { connect } from 'react-redux';
import { getStoreItemByUPC } from '../redux/action/storeItemActions';

class ScannerScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isBarcodeRead: false,
            detectedBarcode: '',
        };
    }

    renderResults() {
        const { storeItemSearchStatus } = this.props.storeItem;

        if (storeItemSearchStatus === 'pending') {
            return (
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View>
                        <MediumText>
                            Searching for item: {this.state.detectedBarcode}
                        </MediumText>
                    </View>
                    <View style={{ flex: 0.2 }}>
                        <LoadingSpinner size={36} />
                    </View>
                </View>
            );
        }
        if (storeItemSearchStatus === 'not found') {
            return (
                <>
                    <MediumText>
                        Ooops, we dont seem to know about any expiring items
                        with this barcode. {'\n'}
                        {'\n'}
                        Would you like to register this items expiry?
                    </MediumText>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}>
                        <TouchableOpacity
                            onPress={() => {
                                alert('add store item!');
                            }}
                            style={{
                                marginTop: 10,
                                marginRight: 10,
                                backgroundColor: primaryGreen,
                                alignSelf: 'center',
                                paddingHorizontal: 40,
                                paddingVertical: 15,
                                borderWidth: 2,
                                borderColor: 'black',
                                borderRadius: 6,
                                flexDirection: 'row',
                            }}>
                            <Text>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() =>
                                this.setState({ isBarcodeRead: false })
                            }
                            style={{
                                marginTop: 10,
                                backgroundColor: 'coral',
                                alignSelf: 'center',
                                paddingHorizontal: 40,
                                paddingVertical: 15,
                                borderWidth: 2,
                                borderColor: 'black',
                                borderRadius: 6,
                                flexDirection: 'row',
                            }}>
                            <Text>Re-Scan</Text>
                        </TouchableOpacity>
                    </View>
                </>
            );
        }
        if (storeItemSearchStatus === 'failed') {
            return (
                <MediumText>
                    There has been an issue retrieving your items. Please
                    contact support.
                </MediumText>
            );
        }
        return (
            <MediumText>
                Please scan an item barcode to find expiry information.
            </MediumText>
        );
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
                            captureAudio={false}
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
                            onBarCodeRead={(barcode) => {
                                this.setState({ isBarcodeRead: true });
                                if (!this.state.isBarcodeRead) {
                                    this.setState({
                                        detectedBarcode: barcode.data,
                                    });
                                    this.props.getStoreItemByUPC();
                                }
                            }}
                        />
                    </View>
                    <View
                        style={{
                            flex: 0.6,
                            backgroundColor: secondaryGreen,
                        }}>
                        {/* //barcode scanner results */}
                        <MediumText>Scanned Results</MediumText>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: secondaryYellow,
                                margin: 15,
                                borderRadius: 10,
                            }}>
                            {this.renderResults()}
                        </View>
                    </View>
                </SafeAreaView>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.3,
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

const mapStateToProps = (state) => {
    return {
        storeItem: state.storeItem,
    };
};

export default connect(mapStateToProps, { getStoreItemByUPC })(ScannerScreen);
