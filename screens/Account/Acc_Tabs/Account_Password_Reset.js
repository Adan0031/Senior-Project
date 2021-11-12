import React from 'react';
import {
    View,
    Image,
} from "react-native";

import { AuthLayout } from "../../";
import { SIZES, COLORS, icons } from "../../../constants"
import { FormInput, TextButton } from "../../../components"
import { utils } from "../../../utils";
import { createStackNavigator } from '@react-navigation/stack';
const MainStack = createStackNavigator();
const Acc_FP = ({ navigation }) => {

    const [email, setEmail] = React.useState("")
    const [emailError, setEmailError] = React.useState("")

    function isEnableSendEmail() {
        return email != "" && emailError == ""
    }
    
    return (
        <AuthLayout
            title="Password Recovery"
            subtitle="Please enter your email address to recover your password"
            titleContainerStyle={{
                marginTop: "40%"
            }}
        >
            <View
                style={{
                    flex: 1,
                    marginTop: "20%"
                }}
            >
                {/* Form Inputs */}
                <FormInput
                    label="Email"
                    keyboardType="email-address"
                    autoCompleteType="email"
                    value={email}
                    onChange={(value) => {
                        utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={(email == "") || (email != "" && emailError == "") ? icons.correct : icons.cancel}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: (email == "") ? COLORS.gray : (email != "" && emailError == "") ? COLORS.green : COLORS.red
                                }}
                            />
                        </View>
                    }
                />


            </View>

            {/* Sign In & Sign Up */}
            <TextButton
                label="Send Email"
                disabled={isEnableSendEmail() ? false: true}
                buttonContainerStyle={{
                    height: 55,
                    alignItems: 'center',
                    marginTop: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: isEnableSendEmail() ? COLORS.primary : COLORS.transparentPrimary,
                }}
                onPress={() => navigation.goBack()}
            />
        </AuthLayout>
    )
}

function Acc_ForgotPassword() {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name="home"
                component={Acc_FP}
                
                options={{
                    title: 'Reset Password',
                    headerStyle: {
                        backgroundColor: COLORS.white
                    },
                    // Center the header title on Android
                    headerTitleAlign: 'center',
                }}
            />
        </MainStack.Navigator>
    );
}

export default Acc_ForgotPassword;