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

    renderChildren() {
        if (this.props.children.length > 0) {
            return this.props.children.map((child, index) => {
                return <MediumText key={index}>{child}</MediumText>;
            });
        } else {
            return <MediumText>{this.props.children}</MediumText>;
        }
    }
    render() {
        console.log(this.props.children.length > 0);
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        this.toggleAccordion();
                    }}
                    style={AccordionStyles.container}
                    activeOpacity={0.9}>
                    <MediumText Align={'left'}>{this.props.title}</MediumText>
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
                        {this.renderChildren()}
                    </ScrollView>
                )}
            </View>
        );
    }
}

export default Accordion;
