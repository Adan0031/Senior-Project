import React from 'react';
import {
    View,
    Text
} from 'react-native';

import { COLORS } from "../../constants";

const CartTab = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.grey
            }}
        >
            <Text>Cart</Text>
        </View>
    )
}

export default CartTab