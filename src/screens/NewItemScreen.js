import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { MediumText, LargeText } from '../components/Text';
import DateTimePicker from '@react-native-community/datetimepicker';

class NewItemScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expiry_date: null,
            barcode: props.route.params.detectedBarcode,
            showDatePicker: false,
        };
    }

    render() {
        const { navigation } = this.props;

        return (
            <View>
                <LargeText>Add New Item Expiry</LargeText>
                <MediumText>{this.state.barcode}</MediumText>
                <View style={{}}>
                    <MediumText align="left">
                        <Text>Expiry Date:</Text>
                        {this.state.expiry_date && (
                            <Text>{this.state.expiry_date.toUTCString()}</Text>
                        )}
                    </MediumText>
                    <Button
                        title="Add Expiry Date"
                        onPress={() => {
                            this.setState({ showDatePicker: true });
                        }}
                    />
                    {this.state.showDatePicker && (
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
                                    showDatePicker: false,
                                });
                            }}
                        />
                    )}

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Details', {
                                id: this.state.barcode,
                                expiry_date: this.state.expiry_date,
                                newItem: true,
                            });
                        }}
                        disabled={!this.state.expiry_date}>
                        <MediumText>Add New Item</MediumText>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Home');
                        }}>
                        <MediumText>Cancel</MediumText>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default NewItemScreen;
