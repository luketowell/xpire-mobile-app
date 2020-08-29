import React, { Fragment, Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import MainStyles from '../Assets/styles/MainStyles';
import Header from '../components/Header';
import {
    getStoreItemDetails,
    resetStoreItem,
} from '../redux/action/storeItemActions';
import { connect } from 'react-redux';
import DetailStyles from '../Assets/styles/pages/DetailStyles';
import LoadingSpinner from '../components/LoadingSpinner';
import { MediumText } from '../components/Text';

class DetailsScreen extends Component {
    componentDidMount() {
        this.focusListener = this.props.navigation.addListener('focus', () => {
            let { id } = this.props.route.params;
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
        // this.focusListener.remove();
        // this.beforeLeaveListener.remove();
    }

    renderItemDetails = () => {
        const { storeItemDetailStatus } = this.props.storeItem;
        console.log(storeItemDetailStatus);
        switch (storeItemDetailStatus) {
            case 'pending':
                return <LoadingSpinner size={64} />;
            default:
                return <Text>Ooops, something has gone wrong.</Text>;
        }
    };

    render() {
        const { id } = this.props.route.params;
        const { navigation } = this.props;
        return (
            <Fragment>
                <SafeAreaView style={MainStyles.top} />
                <SafeAreaView style={MainStyles.container}>
                    <Header navigation={navigation} title="Expiring Items" />
                    <View style={DetailStyles.Container}>
                        {this.renderItemDetails()}
                    </View>
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
