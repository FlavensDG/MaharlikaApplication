import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import LandingPage from "../screens/LandingPage/LandingPage";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={{headerShown: false}}>
                <Stack.Screen name = 'SignIn' component={SignInScreen} />
                <Stack.Screen name = 'SignUp' component={SignUpScreen} />
                <Stack.Screen name = 'ForgetPassword' component={ForgotPasswordScreen} />
                <Stack.Screen name = 'LandingPage' component={LandingPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Navigation
