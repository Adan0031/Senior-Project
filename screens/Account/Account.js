import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Linking,
    StyleSheet,
    ScrollView
} from 'react-native';
import { COLORS, FONTS, SIZES } from "../../constants";
const Account = ({ navigation }) => {
    return (
        <ScrollView
            style={{backgroundColor: 'grey'}}
        >
        
            <Text style={{
                ...FONTS.h1,
                color: COLORS.white,
                paddingBottom: 100,
                marginHorizontal: SIZES.padding

            }}
            >
                Hi Username
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Account_name')}>
                <Text // This is the button for Name
                    style={{
                        color: COLORS.white,
                        ...FONTS.h2,
                        marginHorizontal: SIZES.padding,
                        paddingTop: SIZES.padding,

                    }}
                >
                    Name
                </Text>
 
            </TouchableOpacity>
            <View // This is the line for Name
                    style={{
                        borderBottomColor: COLORS.gray,
                        borderBottomWidth: 1,
                        paddingTop: SIZES.padding,
                        paddingBottom: SIZES.padding
                    }}
            />


            <TouchableOpacity onPress={() => navigation.navigate('Account_email')}>
                <Text // This is the button for Email
                    style={{
                        color: COLORS.white,
                        ...FONTS.h2,
                        marginHorizontal: SIZES.padding,
                        paddingTop: SIZES.padding,

                    }}
                >
                    Email
                </Text>

            </TouchableOpacity>
            <View // This is the line for Email
                    style={{
                        borderBottomColor: COLORS.gray,
                        borderBottomWidth: 1,
                        paddingTop: SIZES.padding,
                        paddingBottom: SIZES.padding
                    }}
            />


            <TouchableOpacity onPress={() => navigation.navigate('Account_password')}>
                <Text // This is the button for Password
                    style={{
                        color: COLORS.white,
                        ...FONTS.h2,
                        marginHorizontal: SIZES.padding,
                        paddingTop: SIZES.padding,

                    }}
                >
                    Password
                </Text>

            </TouchableOpacity>
            <View  // This is the line for Password
                    style={{
                        borderBottomColor: COLORS.gray,
                        borderBottomWidth: 1,
                        paddingTop: SIZES.padding,
                        paddingBottom: SIZES.padding
                    }}
            />


            <TouchableOpacity onPress={() => navigation.navigate('Account_payment')}>
                <Text  // This is the button for Payment
                    style={{
                        color: COLORS.white,
                        ...FONTS.h2,
                        marginHorizontal: SIZES.padding,
                        paddingTop: SIZES.padding,

                    }}
                >
                    Payment
                </Text>
            </TouchableOpacity>
            <View // This is the line for Payment
                    style={{
                        borderBottomColor: COLORS.gray,
                        borderBottomWidth: 1,
                        paddingTop: SIZES.padding,
                        paddingBottom: SIZES.padding
                    }}
            />


            <TouchableOpacity onPress={() => navigation.navigate('Account_order_history')}>
                <Text // This is the button for Order History
                    style={{
                        color: COLORS.white,
                        ...FONTS.h2,
                        marginHorizontal: SIZES.padding,
                        paddingTop: SIZES.padding,

                    }}
                >
                    Order History
                </Text>

            </TouchableOpacity>
            <View // This is the line for Order History
                    style={{
                        borderBottomColor: COLORS.gray,
                        borderBottomWidth: 1,
                        paddingTop: SIZES.padding,
                        paddingBottom: SIZES.padding
                    }}
            />


            <TouchableOpacity onPress={() => navigation.navigate('Account_push_notifications')}>
                <Text // This is the button for Push Notifications
                    style={{
                        color: COLORS.white,
                        ...FONTS.h2,
                        marginHorizontal: SIZES.padding,
                        paddingTop: SIZES.padding,

                    }}
                >
                    Push Notifications
                </Text>

            </TouchableOpacity>
            <View // This is the line for Push Notifications
                    style={{
                        borderBottomColor: COLORS.gray,
                        borderBottomWidth: 1,
                        paddingTop: SIZES.padding,
                        paddingBottom: SIZES.padding
                    }}
            />


            <TouchableOpacity onPress={() => navigation.navigate('Account_app_feedback')}>
                <Text // This is the button for App Feedback
                    style={{
                        color: COLORS.white,
                        ...FONTS.h2,
                        marginHorizontal: SIZES.padding,
                        paddingTop: SIZES.padding,

                    }}
                >
                   App Feedback 
                </Text>
            </TouchableOpacity>
            <View // This is the line for App Feedback
                    style={{
                        borderBottomColor: COLORS.gray,
                        borderBottomWidth: 1,
                        paddingTop: SIZES.padding,
                        paddingBottom: SIZES.padding
                    }}
            />
        </ScrollView>

    )
}
export default Account;