import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import LandingPage from "../screens/LandingPage/LandingPage";
import Splash from "../screens/SplashScreen/SplashScreen";
import BottomTabNav from "./bottomTabNav";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={{headerShown: false}}>
                <Stack.Screen name = 'Splash' component={Splash} />
                <Stack.Screen name = 'SignIn' component={SignInScreen} />
                <Stack.Screen name = 'SignUp' component={SignUpScreen} />
                <Stack.Screen name = 'ForgetPassword' component={ForgotPasswordScreen} />
                <Stack.Screen name = 'LandingPage' component={LandingPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

const NavigationOnSignIn = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={{headerShown: false}}>
                <Stack.Screen name = 'HomeTabs' component={BottomTabNav} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export {Navigation, NavigationOnSignIn};
