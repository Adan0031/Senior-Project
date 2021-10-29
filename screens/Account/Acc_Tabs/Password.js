import 'react-native-gesture-handler';

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { FONTS, SIZES, COLORS, icons, images, dummyData } from "../../../constants"

const MainStack = createStackNavigator();

const password_screen = ({navigation}) => {
    return (
        <View style={styles.screen}>


            

            <Text style={{ color: COLORS.white, marginHorizontal: SIZES.padding, paddingTop: "10%" }}>
                Email*
            </Text>
            <View 
                style={{
                    borderBottomColor: COLORS.linelightGray,
                    borderBottomWidth: 1,
                    paddingTop: SIZES.padding,
                    width: "80%",
                    marginHorizontal: SIZES.padding
                }}
            />

            <Text style={{ color: COLORS.white, marginHorizontal: SIZES.padding, paddingTop: "10%"}}>
                Current Password*
            </Text>
            <View
                style={{
                    borderBottomColor: COLORS.linelightGray,
                    borderBottomWidth: 1,
                    paddingTop: SIZES.padding,
                    width: "80%",
                    marginHorizontal: SIZES.padding
                }}
            />

            
            <TouchableOpacity style={{  // Save Button
                marginTop: "10%",
                paddingTop: "2%",
                paddingBottom: "2%",
                margin: "5%",
                width: "80%",
                alignSelf: "center",
                backgroundColor: COLORS.primary,
                borderRadius: 30,
            }}
                onPress={() => navigation.navigate('Saved')}
            >
                <Text style={{
                    textAlign: "center", color: COLORS.white,
                    ...FONTS.h4,
                    marginHorizontal: SIZES.padding,
                }}>
                    Save
                </Text>
            </TouchableOpacity>
        </View>
    );
};

function Account_password() {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name="home"
                component={password_screen}

                options={{
                    title: 'Password',
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

export default Account_password;

/// Just some styles
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.darkGray,
    },
});