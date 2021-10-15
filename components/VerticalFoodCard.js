import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    Image,
} from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';

const VerticalFoodCard = ({ containerStyle, item, onPress }) => {
    return (
        <TouchableOpacity
            //card styling
            style={{

                paddingVertical: SIZES.radius,
                paddingHorizontal: SIZES.radius,
                alignItems: 'center',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.grey,
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
                    width: 350,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={item.image}
                    style={{ height: "100%", width: "100%" }}
                />
            </View>

            {/* Info */}
            <View
                style={{
                    alignItems: 'center',
                    marginTop: 5,
                    //EDIT* adding padding to text
                    marginBottom: -5
                    
                }}
            >
                <Text style={{ ...FONTS.h2, color: COLORS.white  }}>{item.name}</Text>
                <Text style={{ ...FONTS.body5, color: COLORS.white, textAlign: 'center' }}>{item.description}</Text>
                {/*removed marginTop */}
                <Text style={{ ...FONTS.h2, color: COLORS.white}}>${item.price}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default VerticalFoodCard