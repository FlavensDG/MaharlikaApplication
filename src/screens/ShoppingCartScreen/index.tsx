import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import CartProductItem from '../../components/CartProductItem';
import products from '../../../data/cart';
import {RectangleButton} from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ShoppingCartScreen = () => {
    const navigation = useNavigation();
    const onCheckOut = () => {
        navigation.navigate('Address');
    }
    const totalPrice = products.reduce(
        (summedPrice, product) => 
            summedPrice + product.item.price * product.quantity, 
        0,
    );

    return(
        <ScrollView style={styles.page}>
            <View>
                <Text style={{fontSize: 15}}>Subtotal ({products.length} items):{' '} 
                    <Text style={{color: '#424106', fontWeight: 'bold'}}>${totalPrice.toFixed(2)}</Text>
                </Text>
            </View>
            <View style={styles.checkoutButton}>
                <RectangleButton 
                    text='DESERVE KO TO'
                    onPress={onCheckOut}
                />
            </View>
            <FlatList 
                data={products}
                renderItem={({item}) => <CartProductItem cartItem={item}/>}
                showsVerticalScrollIndicator={false}
            />
            <Text></Text>
            <Text></Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 15,
        marginTop: 35,
    },
    checkoutButton: {
        marginBottom: 10,
    },
});

export default ShoppingCartScreen;
