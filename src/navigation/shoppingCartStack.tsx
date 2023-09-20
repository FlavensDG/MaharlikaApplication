import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ShoppingCartScreen from "../screens/ShoppingCartScreen";
import AddressScreen from "../screens/AddressScreen";
import { ThankYouScreen } from "../screens/ThankYouScreen/ThankYouScreen";

const Stack = createNativeStackNavigator();

const ShoppingCartStack = () => {
    return(
        <Stack.Navigator 
        screenOptions={{headerShown: false}}>
            <Stack.Screen 
                name = 'cart' 
                component={ShoppingCartScreen} 
            />
            <Stack.Screen 
                name = 'Address' 
                component={AddressScreen} 
                options={{title: 'Address'}}
            />
            <Stack.Screen 
                name = 'Thank You' 
                component={ThankYouScreen} 
                options={{title: 'Thank You'}}
            />
        </Stack.Navigator>
    )
};


export default ShoppingCartStack;

