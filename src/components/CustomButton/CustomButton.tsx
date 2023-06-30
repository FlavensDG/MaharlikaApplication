import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";

const PrimaryButton = ({onPress, text}) => {
    return(
        <TouchableOpacity onPress={onPress} style={[styles.containerPrimary]}>
            <Text style={[styles.textPrimary]}>{text}</Text>
        </TouchableOpacity>
    )
}

const RectangleButton = ({onPress, text}) => {
    return(
        <TouchableOpacity onPress={onPress} style={[styles.containerRectangle]}>
            <Text style={[styles.textRectangle]}>{text}</Text>
        </TouchableOpacity>
    )
}

const SemiRectangleButton = ({onPress, text}) => {
    return(
        <TouchableOpacity onPress={onPress} style={[styles.containerSemiRectangle]}>
            <Text style={[styles.textSemiRectangle]}>{text}</Text>
        </TouchableOpacity>
    )
}

const ForgetButton = ({onPress, text}) => {
    return(
        <Pressable onPress = {onPress} style = {[styles.containerForget]}>
            <Text style = {[styles.textForget]}>{text}</Text>
        </Pressable>
    )
}

const SignUpButton = ({onPress, text}) => {
    return(
        <Pressable onPress = {onPress} style = {[styles.containerSignUp]}>
            <Text style = {[styles.textSignUp]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    containerPrimary: {
        backgroundColor: '#424106',
        height: 45,
        width: '100%',

        marginVertical: 10,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textPrimary: {
        color: '#ffff',
        fontWeight: 'bold',
        fontSize: 15,
    },
    containerRectangle: {
        backgroundColor: '#424106',
        height: 45,
        width: 320,

        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textRectangle: {
        color: '#ffff',
        fontWeight: 'bold',
        fontSize: 15,
    },
    containerSemiRectangle: {
        backgroundColor: '#424106',
        height: 45,
        width: 320,

        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textSemiRectangle: {
        color: '#ffff',
        fontWeight: 'bold',
        fontSize: 15,
    },
    containerForget: {
        alignSelf: "flex-end",
        marginVertical: 10,
    },
    textForget: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#424106',
    },

    containerSignUp: {
        alignSelf: "center",
        marginVertical: 10,
    },
    textSignUp: {
        fontWeight: 600,
        fontSize: 15,
        color: '#424106',
    },
});

export {PrimaryButton, SemiRectangleButton, RectangleButton, ForgetButton, SignUpButton};
