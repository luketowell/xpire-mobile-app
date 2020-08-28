import React, { Component, Fragment } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { MediumText } from '../components/Text';
import { connect } from 'react-redux';
import {
    getStoreItemsByCategory,
    resetStoreItemsList,
} from '../redux/action/storeItemActions';
import MainStyles from '../Assets/styles/MainStyles';
import StoreItemScreenStyle from '../Assets/styles/pages/StoreItemScreenStyle';
import Header from '../components/Header';
import LoadingSpinner from '../components/LoadingSpinner';
import StoreItemList from '../components/StoreItemList';
import { NavigationEvents } from '@react-navigation/native';

class StoreItemScreen extends Component {
    componentDidMount() {
        this.focusListener = this.props.navigation.addListener('focus', () => {
            let { id } = this.props.route.params.category;
            this.props.getStoreItemsByCategory(id);
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

    renderItemList() {
        const {
            storeItemsListStatus,
            error,
            storeItemList,
        } = this.props.storeItem;

        if (storeItemsListStatus === 'pending') {
            return <LoadingSpinner size={64} />;
        } else if (storeItemsListStatus === 'failed') {
            return (
                <MediumText>
                    <Text>
                        There has been the following error:{'\n'} {error}.{'\n'}
                    </Text>
                    <Text>Please contact support.</Text>
                </MediumText>
            );
        } else {
            return (
                <StoreItemList
                    navigation={this.props.navigation}
                    storeItems={storeItemList}
                />
            );
        }
    }

    render() {
        const { navigation } = this.props;
        const { id, name } = this.props.route.params.category;

        return (
            <Fragment>
                <SafeAreaView style={MainStyles.top} />
                <SafeAreaView style={MainStyles.container}>
                    <Header navigation={navigation} title="Expiring Items" />
                    <View style={StoreItemScreenStyle.textContainer}>
                        <MediumText>
                            <Text style={{ textAlign: 'left' }}>
                                Expiring items in the {name.toLowerCase()}{' '}
                                Department:
                            </Text>
                        </MediumText>
                    </View>
                    <View style={{ flex: 0.9 }}>{this.renderItemList()}</View>
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
    getStoreItemsByCategory,
    resetStoreItemsList,
})(StoreItemScreen);
