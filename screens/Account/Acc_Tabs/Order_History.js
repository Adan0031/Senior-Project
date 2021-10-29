import 'react-native-gesture-handler';

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { FONTS, SIZES, COLORS, icons, images, dummyData } from "../../../constants"

const MainStack = createStackNavigator();

const orders_screen = ({navigation}) => {
    return (
        <View style={styles.screen}>

        </View>
    );
};

function Account_orders_screen() {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name="home"
                component={orders_screen}

                options={{
                    title: 'Past Orders',
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

export default Account_orders_screen;

/// Just some styles
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.darkGray,
    },
});