import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";

type ImageProp = {
    onPress;
    text: string;
};

const ImageButtonFb = (props:ImageProp) => {
    return(
        <TouchableOpacity onPress = {props.onPress} style={[styles.container]}>
            <Image 
                style={styles.logo}
                source={require('../../../assets/images/Facebook-logo.png')}
            />
        </TouchableOpacity>
    )
}

const ImageButtonGl = (props:ImageProp) => {
    return(
        <TouchableOpacity onPress = {props.onPress} style={[styles.container]}>
            <Image 
                style={styles.logo}
                source={require('../../../assets/images/google-logo.png')}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e8e8e8',
        height: 60,
        width: 60,

        marginVertical: 10,
        marginHorizontal: 10,
        marginTop: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 15,
    },
    logo: {
        width: 30,
        height: 30,
    }
});

export {ImageButtonFb, ImageButtonGl};
