import React from 'react';
import { Text } from 'react-native';
import BigTextStyles from '../Assets/styles/components/BigTextStyles';

function BigText({ text }) {
    return <Text style={BigTextStyles.text}>{text}</Text>;
}

export default BigText;
