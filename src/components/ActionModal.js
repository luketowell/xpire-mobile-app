import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import _ from 'lodash';
import { Picker } from '@react-native-community/picker';
import { addStoreItemAction } from '../redux/action/storeItemActions';
import LoadingSpinner from './LoadingSpinner';

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
            <View style={{ flexDirection: 'row' }}>
                <MediumText>Status:</MediumText>
                <Picker
                    selectedValue={this.state.status}
                    style={{
                        width: '50%',
                        padding: 0,
                        marginLeft: 50,
                        marginBottom: 50,
                        alignSelf: 'center',
                        overflow: 'hidden',
                        backgroundColor: secondaryYellow,
                    }}
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
            </View>
        );
    }

    renderModal() {
        const { storeItem } = this.props;
        if (storeItem.storeItemActionStatus === 'pending') {
            return <LoadingSpinner size={32} />;
        } else {
            return (
                <>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({
                                visible: !this.state.visible,
                                expired_count: null,
                                status: null,
                                expiry_date: null,
                            });
                        }}
                        style={{
                            backgroundColor: 'primaryGreen',
                            alignSelf: 'flex-end',
                            borderWidth: 2,
                            borderColor: 'black',
                            borderRadius: 6,
                            flexDirection: 'row',
                            marginRight: 10,
                        }}>
                        <Text>close</Text>
                    </TouchableOpacity>
                    <View style={{ flex: 0.3 }}>
                        <LargeText align="center">New Action</LargeText>
                    </View>
                    <View style={{}}>
                        <View
                            style={{
                                flexDirection: 'row',
                                paddingBottom: 10,
                            }}>
                            <MediumText align={'left'}>
                                Expired Count:
                            </MediumText>
                            <TextInput
                                style={{
                                    width: '50%',
                                    marginLeft: 10,
                                    fontSize: 20,
                                    borderWidth: 1,
                                    borderColor: 'grey',
                                    borderRadius: 5,
                                }}
                                value={this.state.expired_count}
                                keyboardType="numeric"
                                onChangeText={(text) => {
                                    this.setState({ expired_count: text });
                                }}
                            />
                        </View>
                        {this.renderStatusPicker()}
                        <View style={{}}>
                            <MediumText align="left">
                                Next Expiry Date:
                            </MediumText>
                            <DateTimePicker
                                style={{}}
                                mode="date"
                                display="default"
                                value={
                                    this.state.expiry_date
                                        ? this.state.expiry_date
                                        : new Date()
                                }
                                onChange={(event, selectedDate) => {
                                    this.setState({
                                        expiry_date: selectedDate,
                                    });
                                }}
                            />
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.addStoreItemAction(this.state);
                        }}
                        style={{
                            marginTop: 10,
                            backgroundColor: 'primaryGreen',
                            alignSelf: 'center',
                            paddingHorizontal: 40,
                            paddingVertical: 15,
                            borderWidth: 2,
                            borderColor: 'black',
                            borderRadius: 6,
                            flexDirection: 'row',
                        }}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </>
            );
        }
    }

    render() {
        return (
            <View style={{}}>
                <Modal
                    visible={this.state.visible}
                    onRequestClose={() => {
                        console.log('closed');
                    }}
                    transparent={true}
                    animationType="fade">
                    <View
                        style={{
                            paddingLeft: 10,
                            paddingTop: 100,
                            flex: 1,
                            backgroundColor: 'white',
                        }}>
                        {this.renderModal()}
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
        storeItem: state.storeItem,
    };
};

export default connect(mapStateToProps, { addStoreItemAction })(ActionModal);
