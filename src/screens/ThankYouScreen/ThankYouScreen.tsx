import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectangleButton } from '../../components/CustomButton';

export const ThankYouScreen = () => {
    const navigation = useNavigation();
    const onContinueShoppingPress = () => {
        navigation.navigate('Home')
    }
    return(
        <View style={styles.root}>
            <Text style={styles.text}>
                <Text>Thank You for Purchasing,</Text>
                <Text style={{fontSize: 50}}> KABAYAN!</Text>
            </Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <RectangleButton 
                text='Continue Shopping'
                onPress={onContinueShoppingPress}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'white',
        height: '100%',
        padding: 15,
        paddingTop: '60%',
    },
    text: {
        textAlign: 'center',
        color: '#424106',
        fontWeight: 'bold',
        fontSize: 20,
    },
});
