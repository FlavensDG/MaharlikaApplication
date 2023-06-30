import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ProductItem from '../../components/ProductItem';
import products from '../../../data/products';

const HomeScreen = ({searchValue}: {searchValue: string}) => {
    return(
        <View style={styles.page}>
            <FlatList 
                data={products}
                renderItem={({item}) => <ProductItem item={item}/>}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 15,
    },
});

export default HomeScreen;
