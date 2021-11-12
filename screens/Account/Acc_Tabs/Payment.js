import 'react-native-gesture-handler';

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { FONTS, SIZES, COLORS, icons, images, dummyData } from "../../../constants"

const MainStack = createStackNavigator();

const acc_payment_screen = ({navigation}) => {
    return (
        <View style={styles.screen}>

        </View>
    );
};

function Account_payment() {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name="home"
                component={acc_payment_screen}

                options={{
                    title: 'Payment Methods',
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

export default Account_payment;

/// Just some styles
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.darkGray,
    },
});