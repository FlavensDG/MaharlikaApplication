import React, {useState} from "react";
import { View, Text, SafeAreaView, TextInput } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import LandingPage from "../screens/LandingPage/LandingPage";
import Splash from "../screens/SplashScreen/SplashScreen";
import BottomTabNav from "./bottomTabNav";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import AddressScreen from "../screens/AddressScreen";
import Feather from 'react-native-vector-icons/Feather';

const Stack = createNativeStackNavigator();

interface HeaderComponentProps{
    searchValue: string,
    setSearchValue: () => void;
}

const HeaderComponent = ({searchValue, setSearchValue}: HeaderComponentProps) => {
    return(
        <SafeAreaView style={{backgroundColor: '#424106', height: 120}}>
            <View style={{backgroundColor: 'white', margin: 15, marginTop: 60, padding: 10, height: 40, flexDirection: 'row', alignItems: 'center'}}>
                <Feather name='search' size={20} />
                <TextInput 
                    placeholder='Search a product here' 
                    style={{marginLeft: 5}}
                    value={searchValue}
                    onChangeText={setSearchValue}
                />
            </View>
        </SafeAreaView>
    )
};

const HomeStack = () => {
    const [searchValue, setSearchValue] = useState('');
    return(
        <Stack.Navigator 
        screenOptions={{
            header: () => <HeaderComponent searchValue={searchValue} setSearchValue={setSearchValue}/>
        }}>
            <Stack.Screen name = 'Home' options={{title: 'Home'}}>
                {() => <HomeScreen searchValue={searchValue}/>}
            </Stack.Screen>
            <Stack.Screen name = 'ProductDetails' component={ProductScreen} />
        </Stack.Navigator>
    )
};


export default HomeStack;

