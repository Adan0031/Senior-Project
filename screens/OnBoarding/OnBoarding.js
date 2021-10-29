import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    Animated,
    FlatList
} from 'react-native';

import { constants, images, FONTS, SIZES, COLORS } from "../../constants";
import { TextButton } from "../../components";

const OnBoarding = ({ navigation }) => {

    

    function renderHeaderLogo() {
        return (
            <View
                style={{
                    position: 'absolute',
                    top: SIZES.height > 800 ? 50 : 25,
                    left: 0,
                    right: 0,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={images.utrgv}
                    resizeMode="contain"
                    style={{
                        width: SIZES.width * 0.5,
                        height: 100
                    }}
                />
            </View>
        )
    }

    function renderFooter() {
        return (
            <View
                style={{
                    height: 160
                }}
            >
                {/* Pagination / Dots */}
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center'
                    }}
                >
                    {/* Don't Render Dots */}
                    {/* <Dots /> */}
                </View>

                {/* Buttons */}
                {/* While we are still within the two out of three screens */}
                {/* {currentIndex < constants.onboarding_screens.length - 1 && */}
                    <View
                        style={{
                            flexDirection: 'row',
                            // justifyContent: 'space-between',
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.padding,
                            marginVertical: SIZES.padding
                        }}
                    >
                        {/* Have TO fix routing with Sign Up Button */}
                        {/* <TextButton
                            // label="Skip"
                            label="Sign Up"
                            buttonContainerStyle={{
                                backgroundColor: null
                            }}
                            labelStyle={{
                                color: COLORS.darkGray2
                            }}
                            // Takes you to the next set of screens
                            // onPress={() => navigation.replace("SignIn")}
                            onPress={() => navigation.replace("SignIn")}
                        /> */}

                        <TextButton
                            // label="Next"
                            label="Log In"
                            buttonContainerStyle={{
                                height: 60,
                                width: 200,
                                borderRadius: SIZES.radius
                            }}
                             // When Button is pressed we increase our index to scroll to the next screen
                            // onPress={() => {
                            //     flatListRef?.current?.scrollToIndex({
                            //         index: currentIndex + 1,
                            //         animated: true
                            //     })
                            // }}
                            onPress={() => navigation.replace("SignIn")}
                        />
                    </View>
            </View>
        )
    }

   
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: COLORS.grey,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* Header */}
            {renderHeaderLogo()}
            
            {/* Body */}
            {/* <FlatList> */}
            <View   
                style={{
                    flex: 1,
                    paddingTop: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                    justifyContent: 'center',
                }}
            >
                <Text 
                   style={{ 
                        ...FONTS.h1, 
                        fontSize: 25,
                        paddingTop: SIZES.padding,
                     }}
                >
                        Welcome Vaquero
                </Text>
                <Text 
                   style={{ 
                        ...FONTS.h4, 
                        fontSize: 15,
                        paddingTop: SIZES.padding,
                     }}
                >
                        What would you like to eat today?
                </Text>
            {/* <FlatList/> */}
            </View>

            {/* Footer */}
            {renderFooter()}
        </View>
    )
}

export default OnBoarding;