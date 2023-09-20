import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './style';
import product from '../../../data/product';
import ProductItem from '../../components/ProductItem';
import { Picker } from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import { PrimaryButton, SemiRectangleButton } from '../../components/CustomButton';
import ImageCarousel from '../../components/ImageCarousel';
import { useRoute } from '@react-navigation/native';

const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
    const [quantity, setQuantity] = useState(1);
    const route = useRoute();
    console.log(route.params);
    return(
        <ScrollView style={styles.root}>

            {/* Image */}
            <ImageCarousel images={product.images}/>

            <Text style={styles.title}>{product.title}</Text>
            { /* Options */ }
            <Picker
                selectedValue = {selectedOption}
                onValueChange = {(itemValue) => setSelectedOption(itemValue)}>
                {product.options.map(option => (
                <Picker.Item label = {option} value = {option} />))}
            </Picker> 

            { /* Price */ }
            <Text style={styles.price}>₱{product.price}
                {product.oldPrice && (<Text style={styles.oldPrice}> ₱{product.oldPrice}</Text>)}
            </Text>

            { /* Description */ }
            <Text style={styles.desciption}>{product.description}</Text>

            <Text></Text>

            { /* Quantity Selector */ }
            <View>
               <QuantitySelector quantity = {quantity} setQuantity = {setQuantity}/> 
            </View>

            <Text></Text>
            <Text></Text>


            { /* Buttons */ }
            <View style = {styles.buttonPos}>
                <SemiRectangleButton 
                    text='Add to Cart'
                    onPress={() => {console.warn('Added to Cart')}}
                />
                <SemiRectangleButton 
                    text='Buy Now'
                    onPress={() => {console.warn('Buying Now')}}
                />
            </View>
        </ScrollView>
    )
}

export default ProductScreen;
