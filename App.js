import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import CustomDrawer from './navigation/CustomDrawer';

// Redux Used to Keep track of Drawer Items and Seletcted Bottom Tabs
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { useFonts } from 'expo-font';
import thunk from "redux-thunk";
import rootReducer from "./stores/rootReducer";

import {
    OnBoarding,

    SignIn,
    SignUp,
    ForgotPassword,
    Otp,
    FoodDetail,
    MyCart,
    Checkout,
    Success,

    MyCard,
    AddCard,

    DeliveryStatus,
    
    Map,
} from "./screens";

const Stack = createStackNavigator();

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

const App = () => {

    const [loaded] = useFonts({
        "Poppins-Black": require('./assets/fonts/Poppins-Black.ttf'),
        "Poppins-Bold": require('./assets/fonts/Poppins-Bold.ttf'),
        "Poppins-SemiBold": require('./assets/fonts/Poppins-SemiBold.ttf'),
        "Poppins-Regular": require('./assets/fonts/Poppins-Regular.ttf'),
    })

    if (!loaded) {
        return null;
    }
    // Update Screen rendering here without affecting state (Redux)
    return (
        // This Tag wraps aroud all of our screens for state management purposes
        // Comment out screens to change order
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName={'OnBoarding'}
                >
                    <Stack.Screen
                        name="OnBoarding"
                        component={OnBoarding}
                    />

                    <Stack.Screen
                        name="SignIn"
                        component={SignIn}
                    />

                    <Stack.Screen
                        name="SignUp"
                        component={SignUp}
                    />

                    <Stack.Screen
                        name="ForgotPassword"
                        component={ForgotPassword}
                    />

                    <Stack.Screen
                        name="Otp"
                        component={Otp}
                    />
                    {/* Remove this screen */}
                    <Stack.Screen
                        name="Home"
                        component={CustomDrawer}
                    />

                    <Stack.Screen
                        name="FoodDetail"
                        component={FoodDetail}
                    />

                    <Stack.Screen
                        name="MyCart"
                        component={MyCart}
                    />

                    <Stack.Screen
                        name="MyCard"
                        component={MyCard}
                    />

                    <Stack.Screen
                        name="AddCard"
                        component={AddCard}
                    />

                    <Stack.Screen
                        name="Checkout"
                        component={Checkout}
                    />

                    <Stack.Screen
                        name="Success"
                        component={Success}
                        options={{ gestureEnabled: false }}
                    />

                    <Stack.Screen
                        name="DeliveryStatus"
                        component={DeliveryStatus}
                        options={{ gestureEnabled: false }}
                    />

                    <Stack.Screen
                        name="Map"
                        component={Map}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App