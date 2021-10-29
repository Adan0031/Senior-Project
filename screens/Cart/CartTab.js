import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS } from '../../constants';

const CartTab = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.gray
            
            }}
        >
            <Text>Cart</Text>
        </View>
    )
}

export default CartTab