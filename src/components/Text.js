import React from 'react';
import { Text } from 'react-native';
import TextStyles from '../Assets/styles/components/TextStyles';

export function SmallText({ children }) {
    return <Text style={TextStyles.small}>{children}</Text>;
}

export function MediumText({ children }) {
    return <Text style={TextStyles.medium}>{children}</Text>;
}
export function LargeText({ children }) {
    return <Text style={TextStyles.large}>{children}</Text>;
}
