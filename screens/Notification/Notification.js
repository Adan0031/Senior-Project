import React from 'react';
import {
    View,
    Text
} from 'react-native';

import { COLORS } from "../../constants";

const Notification = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.grey

            }}
        >
            <Text>Notification</Text>
        </View>
    )
}

export default Notification;