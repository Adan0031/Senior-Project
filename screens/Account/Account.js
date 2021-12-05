import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { COLORS, FONTS, SIZES, dummyData } from "../../constants";
import { auth } from "../Authentication/firebase";
const Account = ({ navigation }) => {

    // const navigation = useNavigation()
    const handleSignOut = ( {navigation}) => {
        auth.signOut().then(() => navigation.replace("SignIn")).catch(error => alert(error.message))
    }
    return (
        <ScrollView
            style={{ backgroundColor: COLORS.gray }}
        >
            <Text style={{
                ...FONTS.h1,
                color: COLORS.white,
                paddingBottom: '10%',
                paddingTop: '10%',
                marginHorizontal: SIZES.padding
            }}
            >
                Hi {auth.currentUser?.email}
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Account_name')}>
                <Text // This is the button for Name
                    style={{
                        color: COLORS.white2,
                        ...FONTS.h3,
                        marginHorizontal: SIZES.padding,
                        paddingTop: SIZES.padding,
                    }}
                >
                    Name
                </Text>

            </TouchableOpacity>
            <View // This is the line for name
                style={{
                    borderBottomColor: COLORS.linelightGray,
                    borderBottomWidth: 1,
                    paddingTop: SIZES.padding,
                }}
            />


            <TouchableOpacity onPress={() => navigation.navigate('Account_email')}>
                <Text // This is the button for Email
                    style={{
                        color: COLORS.white2,
                        ...FONTS.h3,
                        marginHorizontal: SIZES.padding,
                        paddingTop: SIZES.padding,

                    }}
                >
                    Email
                </Text>

            </TouchableOpacity>
            <View // This is the line for email
                style={{
                    borderBottomColor: COLORS.linelightGray,
                    borderBottomWidth: 1,
                    paddingTop: SIZES.padding,
                }}
            />

            <TouchableOpacity onPress={() => navigation.navigate('Account_password')}>
                <Text // This is the button for Password
                    style={{
                        color: COLORS.white2,
                        ...FONTS.h3,
                        marginHorizontal: SIZES.padding,
                        paddingTop: SIZES.padding,

                    }}
                >
                    Password
                </Text>

            </TouchableOpacity>
            <View // This is the line for password
                style={{
                    borderBottomColor: COLORS.linelightGray,
                    borderBottomWidth: 1,
                    paddingTop: SIZES.padding,
                }}
            />


            <TouchableOpacity onPress={() => navigation.navigate('MyCard')}>
                <Text  // This is the button for Payment
                    style={{
                        color: COLORS.white2,
                        ...FONTS.h3,
                        marginHorizontal: SIZES.padding,
                        paddingTop: SIZES.padding,

                    }}
                >
                    My Wallet
                </Text>
            </TouchableOpacity>
            <View // This is the line for Payment
                style={{
                    borderBottomColor: COLORS.linelightGray,
                    borderBottomWidth: 1,
                    paddingTop: SIZES.padding,
                }}
            />


            <TouchableOpacity onPress={() => navigation.navigate('Account_orders_history_screen')}>
                <Text // This is the button for Order History
                    style={{
                        color: COLORS.white2,
                        ...FONTS.h3,
                        marginHorizontal: SIZES.padding,
                        paddingTop: SIZES.padding,

                    }}
                >
                    Order History
                </Text>

            </TouchableOpacity>
            <View // This is the line for order history
                style={{
                    borderBottomColor: COLORS.linelightGray,
                    borderBottomWidth: 1,
                    paddingTop: SIZES.padding,
                }}
            />


            <TouchableOpacity onPress={() => navigation.navigate('App_notifications')}>
                <Text // This is the button for Push Notifications
                    style={{
                        color: COLORS.white2,
                        ...FONTS.h3,
                        marginHorizontal: SIZES.padding,
                        paddingTop: SIZES.padding,

                    }}
                >
                    Push Notifications
                </Text>

            </TouchableOpacity>
            <View // This is the line for push notifications
                style={{
                    borderBottomColor: COLORS.linelightGray,
                    borderBottomWidth: 1,
                    paddingTop: SIZES.padding,
                }}
            />


            <TouchableOpacity onPress={() => navigation.navigate('Account_App_feedback')}>
                <Text // This is the button for App Feedback
                    style={{
                        color: COLORS.white2,
                        ...FONTS.h3,
                        marginHorizontal: SIZES.padding,
                        paddingTop: SIZES.padding,

                    }}
                >
                    App Feedback
                </Text>
            </TouchableOpacity>
            <View // This is the line for app feedback
                style={{
                    borderBottomColor: COLORS.linelightGray,
                    borderBottomWidth: 1,
                    paddingTop: SIZES.padding,
                }}
            />
            <View // This is the space between the button and the last gray line
                style={{
                    paddingTop: "5%",
                }}
            />
            <TouchableOpacity style={{
                marginTop: "10%",
                paddingTop: "2%",
                paddingBottom: "2%",
                margin: "5%",
                width: "50%",
                alignSelf: "center",
                backgroundColor: COLORS.primary,
                borderRadius: 30,
            }}
                onPress={handleSignOut}
            >
                <Text style={{
                    textAlign: "center", color: COLORS.white2,
                    ...FONTS.h4,
                    marginHorizontal: SIZES.padding,
                }}>
                    Log Out
                </Text>
            </TouchableOpacity>
            <View // This is the line for app feedback
                style={{
                    paddingTop: "20%",
                }}
            />

        </ScrollView>
    )
}
export default Account;