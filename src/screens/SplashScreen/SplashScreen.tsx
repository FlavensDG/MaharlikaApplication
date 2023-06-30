import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Logo from '../../../assets/images/splashLogo.png';
import Navigation from '../../navigation';
import { useNavigation } from '@react-navigation/native';


export default function Splash() {
    
    const navigation = useNavigation();
    setTimeout(() =>{
        navigation.navigate('SignIn');
    }, 3000);

  return (
    <View style={styles.container}>
        <Image
            style={[styles.logo]}
            source={Logo}
        />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',

        justifyContent: 'center',
        backgroundColor: '#424106',
    },
    logo: {
        height: 250,
        width: 250,
        
        alignSelf: 'center',
    },

});


