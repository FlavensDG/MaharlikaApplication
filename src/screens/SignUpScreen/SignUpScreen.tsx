import React, {useState} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native';
import Logo from '../../../assets/images/maharlikaMain.png';
import { ImageButtonFb, ImageButtonGl } from "../../components/ImageButton";
import CustomInput from "../../components/CustomInput";
import { PrimaryButton, ForgetButton, SignUpButton } from "../../components/CustomButton";
import { useSignUp } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import Navigation from "../../navigation";

const SignUpScreen = () => {
    const {isLoaded, signUp, setActive} = useSignUp();
    const [emailAddress, setEmailAddress] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [pendingVerification, setPendingVerification] = React.useState(false);
    const [code, setCode] = React.useState('');
    const navigation = useNavigation();

    const onExistingAccountPressed = () => {
        navigation.navigate('SignIn');
    }

    const onFacebookPressed = () => {
        console.warn('Signing Up with Facebook');
    }

    const onGooglePressed = () => {
        console.warn('Signing Up with Google');
    }

    const onSignUpPress = async () => {
        if (!isLoaded){
            return;
        }

        try {
            await signUp.create({
                emailAddress,
                password,
            });

            await signUp.prepareEmailAddressVerification({strategy: 'email_code'});
            setPendingVerification(true);
        } catch (err: any){
            console.error(JSON.stringify(err, null, 2));
        }
    };

    const onPressVerify = async () => {
        if (!isLoaded){
            return;
        }
        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({
                code,
        });

            await setActive({session: completeSignUp.createdSessionId});
        } catch (err: any){
            console.error(JSON.stringify(err, null, 2));
        }
    };
    


    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        {!pendingVerification && (

            <View style = {styles.root}>
                <Image style
                source={Logo}
                style={[styles.logo]}
                resizeMode='contain'
                />
                <Text style={styles.createAccountText}>Create Account</Text>
                <CustomInput 
                placeholder='Email'
                value={emailAddress}
                setValue={(email) => setEmailAddress(email)}
                />
                <CustomInput 
                placeholder='Password'
                value={password}
                setValue={(password) => setPassword(password)}
                secureTextEntry={true}
                />
                <ForgetButton 
                text=' Already have an account?'
                onPress={onExistingAccountPressed}
                />
                <PrimaryButton 
                text='SIGN UP'
                onPress={onSignUpPress}
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
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
            </View>
        )}
        {pendingVerification && (
                <View style={styles.root2}>
                    <Image style
                    source={Logo}
                    style={[styles.logo]}
                    resizeMode='contain'
                    />
                    <Text style={styles.createAccountText}>Verification</Text>
                  <View>
                    <CustomInput
                      value={code}
                      placeholder="Code"
                      setValue={(code) => setCode(code)}
                    />
                  </View>
                  <PrimaryButton 
                  onPress={onPressVerify} text='VERIFY' />
                </View>
              )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#ffff',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    root2: {
        backgroundColor: '#ffff',
        justifyContent: 'center',
        padding: 15,
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
