import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { SignOut } from '../../../App';

export const ProfileScreen = () => {
    
    return(
        <View style={styles.root}>
            <View style={styles.text}>
                <Text>Name: </Text>
                <Text style={{fontWeight: 'bold'}}>Robert Angelo San Mateo Marquez</Text>
                <Text></Text>
                <Text>Email: </Text>
                <Text style={{fontWeight: 'bold'}}>ghelomarquez@gmail.com</Text>
                <Text></Text>
                <Text>Contact Number: </Text>
                <Text style={{fontWeight: 'bold'}}>09215005019</Text>
                <Text></Text>
                <Text>Location: </Text>
                <Text style={{fontWeight: 'bold'}}>Paranaque City, NCR, Philippines</Text>
            </View>
            <View style={{marginTop: 340}}>
                <SignOut />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
       padding: 25,
    }, 
    text: {
        padding: 10,
    },
});
