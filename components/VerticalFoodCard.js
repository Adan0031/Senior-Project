import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    Image,
} from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';
import { AuthLayout } from '../screens';
import LineDivider from './LineDivider';

const VerticalFoodCard = ({ containerStyle, item, onPress }) => {
    return (
        <TouchableOpacity
            //card styling
            style={{

                paddingTop: SIZES.radius,
                // paddingHorizontal: SIZES.radius,
                // alignItems: 'center',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.white,
                marginBottom: 15,

                ...containerStyle
            }}
            onPress={onPress}
        >
            {/*EDIT* TOOK OFF FIRE ICON, # OF CALORIES, LIKE ICON*/}
            {/* Calories and Favourite */}
            {/* <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image
                        source={icons.calories}
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                    <Text style={{ ...FONTS.body5, color: COLORS.darkGray2 }}>{item.calories} Calories</Text>
                </View>
                <Image
                    source={icons.love}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: item.isFavourite ? COLORS.primary : COLORS.gray
                    }}
                />
            </View> */}



            {/* Image */}
            <View
                style={{

                    height: 150,
                    //EDIT* increased width to fit to card
                    width: '100%',
                    // alignItems: 'center',
                    // justifyContent: 'center'
                }}
            >
                <Image
                    source={item.image}
                    resizeMode="contain"
                    style={{ height: "100%", width: "100%" }}

                />

            </View>

            {/* Info */}

            <View
            
            >
                <View // This is the line for email
                    style={{
                        borderBottomColor: COLORS.linelightGray,
                        borderBottomWidth: "3%",
                        paddingTop: SIZES.padding,
                    }}
                />             
                <Text style={{ ...FONTS.h2, color: COLORS.grey, paddingHorizontal: SIZES.radius }}>{item.name}</Text>
                <Text style={{ ...FONTS.body5, color: COLORS.grey, paddingHorizontal: SIZES.radius }}>{item.description}</Text>
                <Text style={{ ...FONTS.body5, color: COLORS.grey, paddingHorizontal: SIZES.radius }}>{item.distance}</Text>

                {/*removed marginTop */}

                <Text style={{ ...FONTS.h2, color: COLORS.grey }}>{item.price}</Text>


            </View>
        </TouchableOpacity>
    )
}

export default VerticalFoodCard