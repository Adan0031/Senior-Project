import 'react-native-gesture-handler';

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { FONTS, SIZES, COLORS } from "../../../constants"

const MainStack = createStackNavigator();

const password_screen = ({ navigation }) => {
    const [New_Pass, onchangeTextNew] = React.useState(null);
    const [Current_Pass, onChangeTextCurrent] = React.useState(null);
    return (

        <View style={{flex: 1, backgroundColor: COLORS.darkGray}}>

            <Text style={{ color: COLORS.white, marginHorizontal: SIZES.padding, paddingTop: "10%" }}>
                New Password*
            </Text>

            <TextInput
                style={{ color: COLORS.white, marginHorizontal: SIZES.padding }} onChangeText={onchangeTextNew}
                value={New_Pass}
                placeholder="New Password"
                placeholderTextColor={COLORS.linelightGray} /* this will give the text color of choice for the placeholder*/
                keyboardType="numeric"
            />
            <View
                style={{
                    borderBottomColor: COLORS.linelightGray,
                    borderBottomWidth: 1,
                    width: "80%",
                    marginHorizontal: SIZES.padding
                }}
            />

            <Text style={{ color: COLORS.white, marginHorizontal: SIZES.padding, paddingTop: "10%" }}>
                Current Password*
            </Text>

            <TextInput
                style={{ color: COLORS.white, marginHorizontal: SIZES.padding }} onChangeText={onChangeTextCurrent}
                value={Current_Pass}
                placeholder="Current Password"
                placeholderTextColor={COLORS.linelightGray} /* this will give the text color of choice for the placeholder*/
                keyboardType="numeric"
            />

            <View
                style={{
                    borderBottomColor: COLORS.linelightGray,
                    borderBottomWidth: 1,
                    width: "80%",
                    marginHorizontal: SIZES.padding
                }}
            />

            <TouchableOpacity style={{
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

            {/*this create the forgot your password text just below the save button.
             This button is clikeable and should take your to the password reset page*/ }
            {/* <TouchableOpacity onPress={() => navigation.navigate('Acc_ForgotPassword')}>  */}
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={{
                    textAlign: "center", color: "#FC8D64",
                    ...FONTS.h5,
                    marginHorizontal: SIZES.padding,
                }}>
                    Forgot your Password?
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