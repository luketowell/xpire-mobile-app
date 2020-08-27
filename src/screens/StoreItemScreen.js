import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { MediumText } from '../components/Text';
import { connect } from 'react-redux';

class StoreItemScreen extends Component {
    componentDidMount() {
        console.log(this.props.route.params.id);
    }

    render() {
        const { id } = this.props.route.params;
        return (
            <SafeAreaView>
                <MediumText>Items for categoryid: {id}</MediumText>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};

export default connect(mapStateToProps, {})(StoreItemScreen);
