import 'react-native-gesture-handler';

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { FONTS, SIZES, COLORS, dummyData } from "../../../constants"
import { Colors } from 'react-native/Libraries/NewAppScreen';

const MainStack = createStackNavigator();
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.darkGray,
    },
    item: {
        paddingTop: "3%",
        padding: "5%",
        ...FONTS.h4,
        color: COLORS.white,
        paddingBottom: "0%"
    },
    datestyle: {
        paddingTop: "2%",
        padding: "5%",
        color: COLORS.lightGray2,
        paddingBottom: "2%",
    },
    separator: {
        borderBottomColor: COLORS.linelightGray,
        borderBottomWidth: 1,
        
    }
})
const orders_screen = ({ navigation }) => {
    const [restaurants, setRestaurants] = useState([
        { name: 'Taco Bell', address: '1804 W University Dr', date: 'April 5, 2021 8:05PM', key: '1', cost: "10.32" },
        { name: 'Mcdonalds', address: '2120 W University Dr', date: 'April 5, 2021 8:05PM', key: '2', cost: "32.30" },
        { name: 'Burger King', address: 'TEST ADDRESS', date: 'April 5, 2021 8:05PM', key: '3', cost: "20.30" },
        { name: 'Dominos', address: '1522 W University Dr', date: 'April 5, 2021 8:05PM', key: '4', cost: "6.16" },
        { name: 'Pizza Hut', address: 'Test Address', date: 'April 5, 2021 8:05PM', key: '5', cost: "8.23" },
        { name: 'Raising Canes Chicken Fingers', address: '718 W University Dr', date: 'April 5, 2021 8:05PM', key: '8', cost: "6.85" },
        { name: 'Test Restarant', address: 'Test Address', date: 'April 5, 2021 8:05PM', key: '6', cost: "23,30" },
        { name: 'Test Restarant', address: 'Test Address', date: 'April 5, 2021 8:05PM', key: '7', cost: "21.56" },
    ])
    return (
        <View style={styles.container}>
            <FlatList
                data={restaurants}
                renderItem={({ item }) => (
                    <View style={styles.separator}>
                        <Text style={styles.item}>
                            {item.name}{"\n"}
                            {item.address}
                            
                        </Text>
                        <Text style={styles.datestyle}>
                            {item.date}
                        </Text>
                    </View>
                )}
            />
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

