import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { authUser } from '../redux/action/authActions';
import { getCategories } from '../redux/action/configActions';
import CategoryCard from './CategoryCard';
import { MediumText } from './Text';

class CategoryList extends Component {
    componentDidMount() {
        this.props.getCategories();
    }

    renderCategories(config) {
        console.log('renderconfig', config);
        const { categoriesStatus, categories } = config;

        if (categoriesStatus === 'pending') {
            return <MediumText>Loading...</MediumText>;
        } else if (categoriesStatus === 'failed') {
            return (
                <MediumText>
                    Unfortunately something has gone wrong please contact
                    support.
                </MediumText>
            );
        } else {
            return categories.map((category, index) => (
                <CategoryCard category={category} key={index} />
            ));
        }
    }
    render() {
        const { config } = this.props;
        console.log(config);
        return (
            <ScrollView>
                <View style={{ alignContent: 'center' }}>
                    {this.renderCategories(config)}
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        config: state.config,
    };
};

export default connect(mapStateToProps, { getCategories })(CategoryList);
