import 'react-native-gesture-handler';

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { FONTS, SIZES, COLORS, } from "../../../constants"
import * as firebase from 'firebase';
import { auth } from '../../Authentication/firebase';
const MainStack = createStackNavigator();

const email_screen = ({ navigation }) => {
    const [New_Email, onchangeTextNewEmail] = React.useState(null);
    const [Current_Pass, onChangeTextPass] = React.useState(null);
    const [Current_Email, onchangeTextCurrentEmail] = React.useState(null);


    // Updates email 
    const updateEmail = () => {
        if (New_Email == null || Current_Pass == null || Current_Email == null) {
            alert("Please fill in all fields");
        }
        else {
            firebase.auth().signInWithEmailAndPassword(Current_Email, Current_Pass).then(() => {
                firebase.auth().currentUser.updateEmail(New_Email).then(() => {
                    alert("Email updated successfully, you will be logged out");
                    console.log("Email updated successfully");
                    auth.signOut().then(() => navigation.replace("SignIn")).catch(error => alert(error.message))
                    console.log("Signed out");
                }).catch(function (error) {
                    alert(error.message);
                });
            }).catch(function (error) {
                alert(error.message);
            });
        }
    }


    return (
        <View style={styles.screen}>

            <Text style={{ color: COLORS.white, marginHorizontal: SIZES.padding, paddingTop: "10%" }}>
                Current Email*
            </Text>

            <TextInput
                style={{ color: COLORS.white, marginHorizontal: SIZES.padding }} onChangeText={onchangeTextCurrentEmail}
                value={Current_Email}
                placeholder="Current email"
                placeholderTextColor={COLORS.linelightGray} /* this will give the text color of choice for the placeholder*/
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
                style={{ color: COLORS.white, marginHorizontal: SIZES.padding }} onChangeText={onChangeTextPass}
                value={Current_Pass}
                placeholder="Current password"
                placeholderTextColor={COLORS.linelightGray} /* this will give the text color of choice for the placeholder*/
                keyboardType="default"
                secureTextEntry={true}
            />

            <View
                style={{
                    borderBottomColor: COLORS.linelightGray,
                    borderBottomWidth: 1,
                    width: "80%",
                    marginHorizontal: SIZES.padding
                }}
            />
            {/*// New Email*/}
            <Text style={{ color: COLORS.white, marginHorizontal: SIZES.padding, paddingTop: "10%" }}>
                New Email*
            </Text>
            <TextInput
                style={{ color: COLORS.white, marginHorizontal: SIZES.padding }} onChangeText={onchangeTextNewEmail}
                value={New_Email}
                placeholder="Current password"
                placeholderTextColor={COLORS.linelightGray} /* this will give the text color of choice for the placeholder*/
                keyboardType="default"
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
                onPress={updateEmail}
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
            <TouchableOpacity onPress={() => navigation.navigate('Acc_ForgotPassword')}>
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

function Account_email() {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name="home"
                component={email_screen}

                options={{
                    title: 'Email',
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

export default Account_email;

/// Just some styles
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.darkGray,
    },
});