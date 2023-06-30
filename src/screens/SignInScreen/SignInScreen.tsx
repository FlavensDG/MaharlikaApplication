import React, {useState} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import Logo from '../../../assets/images/maharlikaMain.png';
import CustomInput from "../../components/CustomInput";
import {ImageButtonFb, ImageButtonGl} from "../../components/ImageButton";
import { PrimaryButton, ForgetButton, SignUpButton } from "../../components/CustomButton";
import { useSignIn } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
    const { signIn, setActive, isLoaded } = useSignIn();
    const [emailAddress, setEmailAddress] = React.useState('');
    const [password, setPassword] = React.useState('');
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPress = async () => {
        if (!isLoaded){
            return;
        }
        try {
            const completeSignIn = await signIn.create({
                identifier: emailAddress, password,
            });
        await setActive({ session: completeSignIn.createdSessionId});
        } catch (err: any){
            console.error(JSON.stringify(err, null, 2));
        }
    }

    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgetPassword')
    }
    const onCreateAccountPressed = () => {
        navigation.navigate('SignUp')
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image 
                    source={Logo} 
                    style={[styles.logo]} 
                    resizeMode="contain"
                />
                <Text style={styles.login}>Sign in</Text>
                <CustomInput 
                    placeholder='Email' 
                    value={emailAddress} 
                    setValue={(emailAddress) => setEmailAddress(emailAddress)} 
                />
                <CustomInput 
                    placeholder='Password' 
                    value={password} 
                    setValue={(password) => setPassword(password)} 
                    secureTextEntry={true}
                />
                <ForgetButton 
                    text="Forget Password?"
                    onPress={onForgotPasswordPressed}
                />
                <PrimaryButton 
                    text="LOGIN" 
                    onPress={onSignInPress} 
                />
                <SignUpButton 
                    text="Don't have an account? Create one."
                    onPress={onCreateAccountPressed}
                />
                <Text style = {styles.signInSocial}>Or sign in with a social account</Text>
                <View style={styles.icons}>
                    <ImageButtonFb 
                    />
                    <ImageButtonGl 
                    />
                </View>
                <Text></Text>
                <Text></Text>
                <Text></Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    logo: {
        alignSelf: 'center',
        alignItems: 'center',
        height: 250,
        width: 500,
    },
    root: {
        backgroundColor: '#ffff',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    login: {
        fontSize: 30,
        fontWeight: 800,
        color: '#424106',
        alignSelf: 'flex-start',

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
