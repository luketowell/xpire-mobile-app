import React, { Component, Fragment } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { MediumText } from '../components/Text';
import { connect } from 'react-redux';
import { getStoreItemsByCategory } from '../redux/action/storeItemActions';
import MainStyles from '../Assets/styles/MainStyles';
import StoreItemScreenStyle from '../Assets/styles/pages/StoreItemScreenStyle';
import Header from '../components/Header';
import LoadingSpinner from '../components/LoadingSpinner';

class StoreItemScreen extends Component {
    componentDidMount() {
        let { id } = this.props.route.params.category;
        this.props.getStoreItemsByCategory(id);
    }

    renderItemList() {
        console.log(this.props);
        const { storeItemsListStatus } = this.props.storeItem;
        if (storeItemsListStatus === 'pending') {
            return <LoadingSpinner size={64} />;
        } else {
            return null;
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
                    <View style={{ flex: 0.8 }}>{this.renderItemList()}</View>
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

export default connect(mapStateToProps, { getStoreItemsByCategory })(
    StoreItemScreen
);
