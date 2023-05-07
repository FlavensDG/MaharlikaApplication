import React, {useState} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/maharlikaMain.png';
import { ImageButtonFb, ImageButtonGl } from "../../components/ImageButton";
import CustomInput from "../../components/CustomInput";
import { PrimaryButton, ForgetButton, SignUpButton } from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const navigation = useNavigation();
    const onExistingAccountPressed = () => {
        navigation.navigate('SignIn')
    }

    const onSignUpPressed = () => {
        console.warn('Sign Up Successful');
        navigation.navigate('SignIn')
    }

    const onFacebookPressed = () => {
        console.warn('Signing Up with Facebook');
    }

    const onGooglePressed = () => {
        console.warn('Signing Up with Google');
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style = {styles.root}>
                <Image style
                    source={Logo}
                    style={[styles.logo]}
                    resizeMode='contain'
                />
                <Text style={styles.createAccountText}>Create Account</Text>
                <CustomInput 
                    placeholder='Username'
                    value={username}
                    setValue={setUsername}
                />
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
                    text=' Already have an account?'
                    onPress={onExistingAccountPressed}
                />
                <PrimaryButton 
                    text='SIGN UP'
                    onPress={onSignUpPressed}
                />
                <Text style = {styles.signUpSocial}>Or sign up with a social account</Text>
                <View style = {styles.icons}>
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
    root: {
        backgroundColor: '#ffff',
        alignItems: 'center',
    },
    logo: {
        alignSelf: 'center',
        alignItems: 'center',
        height: 270,
        width: 500,
    },
    createAccountText: {
        fontSize: 30,
        fontWeight: 800,
        color: '#424106',
        alignSelf: 'flex-start',
        marginLeft: 30,
        marginVertical: 10,
    },
    signUpSocial: {
        fontSize: 15,
        fontWeight: 700,
        marginTop: 30,
        color: '#424106',
    },
    icons: {
        flexDirection: 'row',
    },
});

export default SignUpScreen
