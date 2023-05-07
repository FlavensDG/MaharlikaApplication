import React, {useState} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import Logo from '../../../assets/images/maharlikaMain.png';
import CustomInput from "../../components/CustomInput";
import {ImageButtonFb, ImageButtonGl} from "../../components/ImageButton";
import { PrimaryButton, ForgetButton, SignUpButton } from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {height} = useWindowDimensions();
    const navigation = useNavigation();
    const onSignInPressed = () => {
        //backend validation
        navigation.navigate('LandingPage');
    }
    const onSignUpPressed = () => {
        navigation.navigate('SignUp')
    }

    const onFacebookPressed = () => {
        console.warn('Signing in with Facebook');
    }
    const onGooglePressed = () => {
        console.warn('Signing in with Google');
    }
    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgetPassword')
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image style 
                    source={Logo} 
                    style={[styles.logo]} 
                    resizeMode="contain"
                />
                <Text style={styles.login}>Sign in</Text>
                <CustomInput 
                    placeholder='Email' 
                    value={email} 
                    setValue={setEmail} 
                />
                <CustomInput 
                    placeholder='Password' 
                    value={password} 
                    setValue={setPassword} 
                    secureTextEntry={true}
                />
                <ForgetButton 
                    text="Forget Password?"
                    onPress={onForgotPasswordPressed}
                />
                <PrimaryButton 
                    text="LOGIN" 
                    onPress={onSignInPressed} 
                />
                <SignUpButton 
                    text="Don't have an account? Create one."
                    onPress={onSignUpPressed}
                />
                <Text style = {styles.signInSocial}>Or sign in with a social account</Text>
                <View style={styles.icons}>
                    <ImageButtonFb 
                        onPress={onFacebookPressed}
                    />
                    <ImageButtonGl 
                        onPress={onGooglePressed}
                    />
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    logo: {
        alignSelf: 'center',
        alignItems: 'center',
        height: 270,
        width: 500,
    },
    root: {
        backgroundColor: '#ffff',
        alignItems: 'center',
    },
    login: {
        fontSize: 30,
        fontWeight: 800,
        color: '#424106',
        alignSelf: 'flex-start',
        marginLeft: 30,

        marginVertical: 10,
    },
    signInSocial: {
        fontSize: 15,
        fontWeight: 700,
        marginTop: 50,
        color: '#424106',
    },
    icons: {
        flexDirection: 'row',
    }

});

export default SignInScreen

