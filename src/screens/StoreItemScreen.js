import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { MediumText } from '../components/Text';
import { connect } from 'react-redux';
import { getStoreItemsByCategory } from '../redux/action/storeItemActions';

class StoreItemScreen extends Component {
    componentDidMount() {
        let { id } = this.props.route.params;
        this.props.getStoreItemsByCategory(id);
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

export default connect(mapStateToProps, { getStoreItemsByCategory })(
    StoreItemScreen
);
