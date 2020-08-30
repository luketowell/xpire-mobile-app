import React from 'react';
import { Text } from 'react-native';
import TextStyles from '../Assets/styles/components/TextStyles';

export function SmallText({ children, align, color }) {
    return (
        <Text
            style={[
                TextStyles.small,
                align ? { textAlign: align } : null,
                color ? { color: color } : null,
            ]}>
            {children}
        </Text>
    );
}

export function MediumText({ children, align, color }) {
    return (
        <Text
            style={[
                TextStyles.medium,
                align ? { textAlign: align } : null,
                color ? { color: color } : null,
            ]}>
            {children}
        </Text>
    );
}
export function LargeText({ children, color, align }) {
    return (
        <Text
            style={[
                TextStyles.large,
                align ? { textAlign: align } : null,
                color ? { color: color } : null,
            ]}>
            {children}
        </Text>
    );
}
