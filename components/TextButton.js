import React from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';
import { FONTS, COLORS } from "../constants";

// Props or Parameters passed into our Custom Functional Component
const TextButton = ({
    buttonContainerStyle,
    disabled,
    label,
    labelStyle,
    label2 = "",
    label2Style,
    onPress
}) => {
    return (
        <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.primary,
                // We destructure this prop because this prop itself may be coming in with more props
                ...buttonContainerStyle
            }}
            disabled={disabled}
            onPress={onPress}
        >
            <Text style={{ color: COLORS.white, ...FONTS.h3, ...labelStyle }}>
                {label}
            </Text>

            {label2 != "" &&
                <Text
                    style={{
                        flex: 1,
                        textAlign: 'right',
                        color: COLORS.white,
                        ...FONTS.h3,
                        ...label2Style
                    }}
                >
                    {label2}
                </Text>
            }
        </TouchableOpacity>
    )
}

export default TextButton;