import React, {useState} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/maharlikaMain.png';
import CustomInput from "../../components/CustomInput";
import { PrimaryButton, ForgetButton, SignUpButton } from "../../components/CustomButton";
import { useSignIn } from "@clerk/clerk-expo";

const ForgotPasswordScreen = () => {
    const[email, setEmail] = useState('');

    const onSendPressed = () => {
        console.warn('Request Sent');
    }



    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style = {styles.root}>
                <Image style
                    source={Logo}
                    style={[styles.logo]}
                    resizeMode='contain'
                />
                <Text style={styles.sendText}>Forgot Password</Text>
                <Text style={styles.Instructions}>Please enter your email address. You will receive a link to create a new password via email</Text>
                <CustomInput 
                    placeholder='Email'
                    value={email}
                    setValue={setEmail}
                />
                <Text style={styles.description}>Not a valid email address. Should be your@email.com</Text>
                <PrimaryButton 
                    text='SEND'
                    onPress={onSendPressed}
                />
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#ffff',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    logo: {
        height: 250,
        width: 500,
    },
    sendText: {
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
    Instructions: {
        fontSize: 15,
        alignSelf: 'flex-start',
        fontWeight: 700,
        marginVertical: 15,
    },
    description: {
        fontSize: 11,
        textAlign: 'center',
        marginBottom: 30,
    },
});

export default ForgotPasswordScreen
