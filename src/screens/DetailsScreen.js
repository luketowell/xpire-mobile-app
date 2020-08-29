import React, { Fragment, Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import MainStyles from '../Assets/styles/MainStyles';
import Header from '../components/Header';
import {
    getStoreItemDetails,
    resetStoreItem,
} from '../redux/action/storeItemActions';
import { connect } from 'react-redux';

class DetailsScreen extends Component {
    componentDidMount() {
        this.focusListener = this.props.navigation.addListener('focus', () => {
            let { id } = this.props.route.params.category;
            this.props.getStoreItemDetails(id);
        });
        this.beforeLeaveListener = this.props.navigation.addListener(
            'blur',
            () => {
                this.props.resetStoreItemsList();
            }
        );
    }

    componentWillUnmount() {
        this.focusListener.remove();
        this.beforeLeaveListener.remove();
    }

    render() {
        const { id } = this.props.route.params;
        const { navigation } = this.props;
        return (
            <Fragment>
                <SafeAreaView style={MainStyles.top} />
                <SafeAreaView style={MainStyles.container}>
                    <Header navigation={navigation} title="Expiring Items" />
                    <Text>Details Screen {id}</Text>
                </SafeAreaView>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        storeItem: state.storeItem,
    };
};

export default connect(mapStateToProps, {
    getStoreItemDetails,
    resetStoreItem,
})(DetailsScreen);
