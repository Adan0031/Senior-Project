import React from 'react';
import {
    TouchableOpacity,
    Image
} from 'react-native';
import { COLORS } from '../constants';
// Add props here due to testID issue, pass incoming props and into components in function
const IconButton = ({ containerStyle, icon, iconStyle, onPress, ...props }) => {

    return (
        <TouchableOpacity
            {...props}
            style={{
                ...containerStyle
            }}
            onPress={onPress}
        >
            <Image
                source={icon}
                style={{
                    width: 30,
                    height: 30,
                    tintColor: COLORS.white,
                    ...iconStyle
                }}
            />
        </TouchableOpacity>
    )
}

export default IconButton;