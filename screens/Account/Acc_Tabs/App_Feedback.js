import 'react-native-gesture-handler';

import React from 'react';
import { View, Text, TextInput, TouchableOpacity,Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { SIZES, COLORS, FONTS } from "../../../constants";
import {
    CustomSwitch,
    FormInput,
    TextButton,
    TextIconButton
} from "../../../components"
const MainStack = createStackNavigator();


const feedback_screen = ({ navigation }) => {
    const [FirstN, onchangeTextFirst] = React.useState(null);
    const [LastN, onChangeTextLast] = React.useState(null);
    const [Email, onChangeTextEmail] = React.useState(null);





    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [emailError, setEmailError] = React.useState("")

    const [showPass, setShowPass] = React.useState(false)
    const [saveMe, setSaveMe] = React.useState(false)

    function isEnableSignIn() {
        return email != "" && password != "" && emailError == ""
    }

    return (

        <View style={{ flex: 1, backgroundColor: COLORS.darkGray }}>
            {/* This is the Text for First name*/}
            <Text style={{ color: COLORS.white, marginHorizontal: SIZES.padding, paddingTop: "10%" }}>
                First Name (Optional)

            </Text>
            {/* This is the inputText for First name*/}
            <TextInput
                style={{ color: COLORS.white, marginHorizontal: SIZES.padding }} onChangeText={onchangeTextFirst} /* Will change the color of the text inputed*/
                value={FirstN}
                placeholder="First Name"
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
            {/* This is the Text for Last name*/}
            <Text style={{ color: COLORS.white, marginHorizontal: SIZES.padding, paddingTop: "10%" }}>
                Last Name (Optional)
            </Text>
            {/* This is the inputText for Last name*/}
            <TextInput
                style={{ color: COLORS.white, marginHorizontal: SIZES.padding }} onChangeText={onChangeTextLast}
                value={LastN}
                placeholder="Last Name"
                placeholderTextColor={COLORS.linelightGray}
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
            {/* This is the Text for Email*/}
            <Text style={{ color: COLORS.white, marginHorizontal: SIZES.padding, paddingTop: "10%" }}>
                Email*
            </Text>
            {/* This is the inputText for Email*/}
            <TextInput
                style={{ color: COLORS.white, marginHorizontal: SIZES.padding }} onChangeText={onChangeTextEmail}
                value={Email}
                placeholder="Email"
                placeholderTextColor={COLORS.linelightGray}
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
             {/* Form Inputs */}
             <FormInput
                    placeholder="Comments Here"
                    label="Email"
                    keyboardType="email-address"
                    autoCompleteType="email"
                    value={email}
                    onChange={(value) => {
                        // utils.validateEmail(value, setEmailError)
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

                                // source={(email == "") || (email != "" && emailError == "") ? s.ciconorrect : icons.cancel}
                                source={(email == "") || (email != "" && emailError == "") ? null : null}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: (email == "") ? COLORS.gray : (email != "" && emailError == "") ? COLORS.green : COLORS.red
                                }}
                            />
                        </View>
                    }
                />
            {/* Submit Button */}
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
                onPress={() => navigation.navigate('Save')}
            >
                <Text style={{
                    textAlign: "center", color: COLORS.white,
                    ...FONTS.h4,
                    marginHorizontal: SIZES.padding,
                }}>
                    Submit
                </Text>
            </TouchableOpacity>





        </View>
    );
};

function Account_App_feedback() {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name="home"
                component={feedback_screen}

                options={{
                    title: 'App Feedback',
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



export default Account_App_feedback;