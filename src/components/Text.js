import React from 'react';
import { Text } from 'react-native';
import TextStyles from '../Assets/styles/components/TextStyles';

export function SmallText({ children, align }) {
    return (
        <Text style={[TextStyles.small, align ? { textAlign: align } : null]}>
            {children}
        </Text>
    );
}

export function MediumText({ children, align }) {
    return (
        <Text style={[TextStyles.medium, align ? { textAlign: align } : null]}>
            {children}
        </Text>
    );
}
export function LargeText({ children }) {
    return <Text style={TextStyles.large}>{children}</Text>;
}
