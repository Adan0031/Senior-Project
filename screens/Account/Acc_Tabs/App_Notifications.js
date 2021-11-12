import 'react-native-gesture-handler';

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { FONTS, SIZES, COLORS, icons, images, dummyData } from "../../../constants"

const MainStack = createStackNavigator();

const app_notif_screen = ({ navigation }) => {
    {/* This is the toggle status for the switch being either true or false */ }
    const [Order_isEnabled, Order_setIsEnabled] = useState(false);
    const [Offer_isEnabled, Offer_setIsEnabled] = useState(false);
    const Order_toggleSwitch = () => Order_setIsEnabled(previousState => !previousState);
    const Offer_toggleSwitch = () => Offer_setIsEnabled(previousState => !previousState);
    return (

        <View style={{ flex: 1, backgroundColor: COLORS.darkGray }}>
            {/* Main Selection */}

            <Text style={{ color: COLORS.white, marginHorizontal: SIZES.padding, paddingTop: "10%", ...FONTS.h4 }}>
                Order Status
            </Text>
            {/* This uses row direction to make the switch to the right*/}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                {/* Description of the selection */}
                <Text style={{ color: COLORS.white, marginHorizontal: SIZES.padding, fontSize: 12 }}>
                    Recieve updates about your order
                </Text>
                {/* This is the switch button for the first selection */}
                <Switch style={{ marginHorizontal: "20%" }}
                    trackColor={{ false: "#767577", true: "#F8A283" }}
                    thumbColor={Order_isEnabled ? COLORS.primary : "#f4f3f4"}
                    onValueChange={Order_toggleSwitch}
                    value={Order_isEnabled}
                />

            </View>


            {/* Main Selection */}
            <Text style={{ color: COLORS.white, marginHorizontal: SIZES.padding, paddingTop: "10%", ...FONTS.h4 }}>
                Offers
            </Text>
            {/* This uses row direction to make the switch to the right*/}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {/* Description of the selection */}

                <Text style={{ color: COLORS.white, marginHorizontal: SIZES.padding, fontSize: 12 }}>
                    Receive exclusive discounts and promotions
                </Text>
                <Switch style={{ marginHorizontal: "4%" }}
                    trackColor={{ false: "#767577", true: "#F8A283" }}
                    thumbColor={Offer_isEnabled ? COLORS.primary : "#f4f3f4"}
                    onValueChange={Offer_toggleSwitch}
                    value={Offer_isEnabled}

                />
            </View>
        </View>
    );
};

function App_notifications() {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name="home"
                component={app_notif_screen}

                options={{
                    title: 'Push Notifications',
                    headerTintColor: COLORS.white,
                    headerStyle: {
                        backgroundColor: COLORS.gray
                    },
                    // Center the header title on Android
                    headerTitleAlign: 'center',
                }}

            />

        </MainStack.Navigator>
    );
}

export default App_notifications;