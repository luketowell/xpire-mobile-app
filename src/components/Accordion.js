import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faChevronCircleDown,
    faChevronCircleLeft,
} from '@fortawesome/free-solid-svg-icons';
import AccordionStyles from '../Assets/styles/components/AccordionStyle';
import { MediumText } from './Text';

class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }

    toggleAccordion() {
        this.setState({ expanded: !this.state.expanded });
    }

    render() {
        console.log(this.props.children);
        return (
            <View style={{ flex: 0.2 }}>
                <TouchableOpacity
                    onPress={() => {
                        this.toggleAccordion();
                    }}
                    style={AccordionStyles.container}
                    activeOpacity={0.9}>
                    <Text>{this.props.title}</Text>
                    <FontAwesomeIcon
                        icon={
                            this.state.expanded
                                ? faChevronCircleDown
                                : faChevronCircleLeft
                        }
                        size={20}
                    />
                </TouchableOpacity>
                <View style={AccordionStyles.accordionHeader} />
                {this.state.expanded && (
                    <ScrollView style={AccordionStyles.dropDownContainer}>
                        {this.props.children.map((child, index) => {
                            return <MediumText key={index}>{child}</MediumText>;
                        })}
                    </ScrollView>
                )}
            </View>
        );
    }
}

export default Accordion;
