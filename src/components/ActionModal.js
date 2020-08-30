import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

import { MediumText, LargeText } from './Text';
import {
    primaryGreen,
    secondaryYellow,
} from '../Assets/styles/variables/variables';
import DatePicker from './DatePicker';

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
                            flex: 0.7,
                            marginTop: 250,
                            justifyContent: 'center',
                            borderRadius: 20,
                            backgroundColor: secondaryYellow,
                        }}>
                        <View
                            style={{
                                flex: 0.2,
                            }}>
                            <LargeText align="center">New Action</LargeText>
                        </View>
                        <View
                            style={{
                                flex: 0.7,
                            }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignContent: 'center',
                                }}>
                                <MediumText>Expired Count:</MediumText>
                                <TextInput
                                    style={{
                                        borderColor: 'gray',
                                        borderWidth: 1,
                                    }}
                                />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <MediumText>Status:</MediumText>
                                <TextInput
                                    style={{
                                        height: 40,
                                        borderColor: 'gray',
                                        borderWidth: 1,
                                    }}
                                />
                            </View>
                            <DateTimePicker
                                mode="date"
                                display="default"
                                value={new Date()}
                                style={{ width: '100%' }}
                            />
                        </View>
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
