import React from 'react';
import { Text } from 'react-native';
import { SmallText } from './Text';

function Action({ action }) {
    return (
        <SmallText align={'left'}>
            {action.user_id} - {action.status.name} - {action.expired_count} -{' '}
            {new Date(action.created_date).toUTCString()}
        </SmallText>
    );
}

export default Action;
