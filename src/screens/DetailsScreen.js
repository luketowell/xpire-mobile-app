import React, { Fragment, Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import MainStyles from '../Assets/styles/MainStyles';
import Header from '../components/Header';
import {
    getStoreItemDetails,
    resetStoreItemDetails,
    addNewStoreItem,
} from '../redux/action/storeItemActions';
import { connect } from 'react-redux';
import DetailStyles from '../Assets/styles/pages/DetailStyles';
import LoadingSpinner from '../components/LoadingSpinner';
import { MediumText } from '../components/Text';
import ItemDetail from '../components/ItemDetail';
import Accordion from '../components/Accordion';
import Action from '../components/Action';

class DetailsScreen extends Component {
    componentDidMount() {
        console.log(this.props.route.params);
        this.focusListener = this.props.navigation.addListener('focus', () => {
            let { id, expiry_date, newItem } = this.props.route.params;
            if (newItem == true) {
                //add new item
                this.props.addNewStoreItem(id, expiry_date);
            } else {
                this.props.getStoreItemDetails(id);
            }
        });
        this.beforeLeaveListener = this.props.navigation.addListener(
            'blur',
            () => {
                this.props.resetStoreItemDetails();
            }
        );
    }

    componentWillUnmount() {
        this.focusListener.remove();
        this.beforeLeaveListener.remove();
    }

    renderItemDetails = () => {
        const {
            storeItemDetailStatus,
            storeItemDetails,
        } = this.props.storeItem;
        switch (storeItemDetailStatus) {
            case 'pending':
                return <LoadingSpinner size={64} />;
            case 'failed':
                return (
                    <MediumText>
                        There has been an issue retrieving the item details.
                        Please contact support.
                    </MediumText>
                );
            case 'complete':
                return (
                    <ItemDetail
                        details={storeItemDetails.item}
                        actions={storeItemDetails.actions}
                    />
                );
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
    resetStoreItemDetails,
    addNewStoreItem,
})(DetailsScreen);
