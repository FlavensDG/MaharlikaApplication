import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './style';

import { useNavigation } from '@react-navigation/native';

interface ProductItemProps{
    item: {
        id: string;
        title: string;
        image: string;
        avgRating: number;
        ratings: number;
        price: number;
        oldPrice?: number;
    }
}

const ProductItem = (props: ProductItemProps) => {
    const item = props.item;
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('ProductDetails', {id: item.id});
    };
    return(
        <TouchableOpacity onPress={onPress} style={styles.root}>
                <Image style={styles.image} source = {{uri: item.image}} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines = {3}>{item.title}</Text>
                    {/*Ratings*/}
                    <View style={styles.ratingsContainer}>
                        {[0,0,0,0,0].map((el, i) => 
                            <FontAwesome 
                                style={styles.star} 
                                name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'} 
                                size={15} 
                                color={'#e47911'} 
                            />
                        )}
                        <Text>{item.ratings}</Text>
                    </View>
                    <Text style={styles.price}>₱{item.price}
                        {item.oldPrice && (<Text style={styles.oldPrice}> ₱{item.oldPrice}</Text>)}
                    </Text>
                </View>
            </TouchableOpacity>
    );
};

export default ProductItem;
