import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { authUser } from '../redux/action/authActions';
import { ScrollView } from 'react-native-gesture-handler';
import { getCategories } from '../redux/action/configActions';

class CategoryList extends Component {
    componentDidMount() {
        this.props.getCategories();
    }

    renderCategories(config) {
        console.log('renderconfig', config);
        const { categoriesStatus, categories } = config;

        if (categoriesStatus === 'pending') {
            return <Text>Loading...</Text>;
        } else if (categoriesStatus === 'failed') {
            return (
                <Text>
                    Unfortunately something has gone wrong please contact
                    support.
                </Text>
            );
        } else {
            return categories.map((category, index) => (
                <Text key={index}>{category.name}</Text>
            ));
        }
    }
    render() {
        const { config } = this.props;
        console.log(config);
        return <ScrollView>{this.renderCategories(config)}</ScrollView>;
    }
}

const mapStateToProps = (state) => {
    return {
        config: state.config,
    };
};

export default connect(mapStateToProps, { getCategories })(CategoryList);
