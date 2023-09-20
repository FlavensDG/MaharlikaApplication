import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./homeStack";
import ShoppingCartStack from "./shoppingCartStack";
import { ProfileScreen } from "../screens/ProfileScreen/ProfileScreen";

import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return(
            <Tab.Navigator 
            screenOptions={{
                tabBarShowLabel: false, 
                tabBarInactiveTintColor: '#9B9B9B', 
                tabBarActiveTintColor: '#424106',
            }}>
                <Tab.Screen 
                    name = 'Home' 
                    component={HomeStack} 
                    options={{
                        headerShown: false,
                        tabBarIcon: ({color}) => (
                            <Entypo name = 'home' color={color} size={25}/>
                        ), 
                    }}
                />
                <Tab.Screen 
                    name = 'Profile' 
                    component={ProfileScreen} 
                    options={{
                        tabBarIcon: ({color}) => (
                            <Entypo name = 'user' color={color} size={25}/>
                        ), 
                    }}
                />
                <Tab.Screen 
                    name = 'Shopping Cart' 
                    component={ShoppingCartStack} 
                    options={{
                        headerShown: false,
                        tabBarIcon: ({color}) => (
                            <Entypo name = 'shopping-cart' color={color} size={25}/>
                        ), 
                    }}
                />
                <Tab.Screen 
                    name = 'More' 
                    component={HomeStack} 
                    options={{
                        tabBarIcon: ({color}) => (
                            <Entypo name = 'menu' color={color} size={25}/>
                        ), 
                    }}
                />
            </Tab.Navigator>
    )
};


export default BottomTabNav;

