import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const CustomInput = ({value, setValue, placeholder, secureTextEntry, inputMode, onEndEditing}) => {
    return(
        <View style = {styles.container}>
            <TextInput 
                onEndEditing={onEndEditing}
                value={value}
                onChangeText={setValue}
                placeholder={placeholder} 
                style={styles.input}
                secureTextEntry={secureTextEntry}
                autoCapitalize='none'
                inputMode={inputMode}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e8e8e8',
        height: 45,
        width: '100%',

        borderColor: '#e8e8e8',
        borderWidth: 2,
        borderRadius: 10,
        
        marginVertical: 10,
        paddingLeft: 10,
        justifyContent: 'center',
    },
    input: {
        fontSize: 15,
    },
});

export default CustomInput
