import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import _ from 'lodash';
import { Picker } from '@react-native-community/picker';

import { MediumText, LargeText } from './Text';
import {
    primaryGreen,
    secondaryYellow,
} from '../Assets/styles/variables/variables';

class ActionModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            expired_count: null,
            status: 1,
            expiry_date: null,
        };
    }

    prepareData(data) {
        const map = {
            id: 'value',
            name: 'label',
        };

        var mappedData = [];

        data.map((object) => {
            var mappedObject = _.mapKeys(object, (value, key) => {
                return map[key];
            });
            mappedData.push(mappedObject);
        });
        return mappedData;
    }

    renderStatusPicker() {
        const Statuses = this.prepareData(this.props.config.statuses);

        return (
            <Picker
                selectedValue={this.state.status}
                style={{ height: 50, width: 100 }}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({ status: itemValue })
                }>
                {Statuses.map((status) => {
                    return (
                        <Picker.Item
                            label={status.label}
                            value={status.value}
                        />
                    );
                })}
            </Picker>
        );
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
                                    paddingBottom: 5,
                                }}>
                                <MediumText>Expired Count:</MediumText>
                                <TextInput
                                    style={{
                                        borderColor: 'gray',
                                        borderWidth: 1,
                                        width: '50%',
                                        marginLeft: 5,
                                    }}
                                />
                                {this.renderStatusPicker()}
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <MediumText>Status:</MediumText>
                                <TextInput
                                    style={{
                                        borderColor: 'gray',
                                        borderWidth: 1,
                                        width: '50%',
                                        marginLeft: 5,
                                    }}
                                />
                            </View>
                            <DateTimePicker
                                mode="date"
                                display="default"
                                value={new Date()}
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
