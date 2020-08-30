import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { MediumText, LargeText } from './Text';
import { primaryGreen } from '../Assets/styles/variables/variables';

class ActionModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            expired_count: null,
            status: null,
            expiry_date: null,
        };
    }
    render() {
        return (
            <View
                style={{
                    flex: 0.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 22,
                }}>
                <Modal
                    visible={this.state.visible}
                    onRequestClose={() => {
                        console.log('closed');
                    }}
                    transparent={true}
                    animationType="fade">
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginHorizontal: 10,
                            marginVertical: '60%',
                            backgroundColor: 'coral',
                            borderRadius: 20,
                        }}>
                        <LargeText>New Action</LargeText>
                        <MediumText>
                            <Text></Text>
                            <Text></Text>
                        </MediumText>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    visible: !this.state.visible,
                                    expired_count: null,
                                    status: null,
                                    expiry_date: null,
                                });
                            }}>
                            <Text>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <TouchableOpacity
                    onPress={() => {
                        this.setState({ visible: !this.state.visible });
                    }}
                    style={{
                        marginTop: 10,
                        backgroundColor: primaryGreen,
                        alignSelf: 'center',
                        paddingHorizontal: 40,
                        paddingVertical: 15,
                        borderWidth: 2,
                        borderColor: 'black',
                        borderRadius: 6,
                        flexDirection: 'row',
                    }}>
                    <FontAwesomeIcon
                        icon={faPlusCircle}
                        size={20}
                        color="white"
                        style={{ alignSelf: 'center', marginRight: 5 }}
                    />
                    <MediumText color="white">Open Modal</MediumText>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        config: state.config,
    };
};

export default connect(mapStateToProps)(ActionModal);
