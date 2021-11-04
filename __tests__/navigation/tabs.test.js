import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import  Tabs  from "../../navigation/tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SIZES } from "../../constants";

// Mock @react-navigation/bottom-tabs import
// jest.mock("@react-navigation/bottom-tabs", () => ({
//     BottomTabNavigationOptions: {}, 
// }));

// Testing the Rendering of the tabs navigation component
describe("Testing React Navigation", () => {
    test("Bottom Tabs Render Correctly", async() => {
        const { getByText } = render(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Tabs} />
                </Stack.Navigator>
            </NavigationContainer>
        );
        const title = getByText("Home");
        expect(title).toBeTruthy();
    });
});