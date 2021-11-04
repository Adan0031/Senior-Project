import 'react-native-gesture-handler';

import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { SIZES, COLORS, FONTS } from "../../../constants"

const MainStack = createStackNavigator();


const acc_screen = ({ navigation }) => {
    const [FirstN, onchangeTextFirst] = React.useState(null);
    const [LastN, onChangeTextLast] = React.useState(null);
    return (

        <View style={{flex: 1, backgroundColor: COLORS.darkGray}}>
            {/* This is the Text for First name*/}
            <Text style={{ color: COLORS.white, marginHorizontal: SIZES.padding, paddingTop: "10%" }}>
                First Name*

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
                Last Name*
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
                onPress={() => navigation.navigate('Save')}
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

function Account_name() {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name="home"
                component={acc_screen}

                options={{
                    title: 'Name',
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



export default Account_name;