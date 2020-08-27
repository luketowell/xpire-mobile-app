import React, { Component } from 'react';
import { View, Animated, Easing } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import LoadingSpinnerStyle from '../Assets/styles/components/LoadingSpinnerStyle';

class LoadingSpinner extends Component {
    constructor(props) {
        super(props);
        this.state = { spinAnimated: new Animated.Value(0) };
    }

    componentDidMount() {
        Animated.loop(
            Animated.timing(this.state.spinAnimated, {
                toValue: 1,
                duration: 2500,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    }

    render() {
        const { size } = this.props;
        const spin = this.state.spinAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });

        return (
            <Animated.View
                style={[
                    LoadingSpinnerStyle.iconContainer,
                    { transform: [{ rotate: spin }] },
                ]}>
                <View>
                    <FontAwesomeIcon
                        icon={faSpinner}
                        size={size}
                        style={LoadingSpinnerStyle.icon}
                    />
                </View>
            </Animated.View>
        );
    }
}

export default LoadingSpinner;
