import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CustomInput from '../../components/CustomInput';
import { SemiRectangleButton } from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {ThankYouScreen} from '../ThankYouScreen/ThankYouScreen';

const AddressScreen = () => {
    const navigation = useNavigation();
    const [country, setCountry] = useState();
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [addressError, setAddressError] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('NCR');
    const [zipCode, setZipCode] = useState('');
    const validateAddress = () => {
        if (address.length < 3){
            setAddressError('Address is too short');
        }
    }
    const onCheckOutPress = () => {
        if (!!addressError){
            Alert.alert('Fix all field errors before checking out');
            return;
        }
        if (!fullName){
            Alert.alert('Please enter a name');
            return;
        }
        
        if (!phone){
            Alert.alert('Please enter your phone number');
            return;
        }

        if (!address){
            Alert.alert('Please enter your address');
            return;
        }

        if (!city){
            Alert.alert('Please enter a city');
            return;
        }

        if (!zipCode){
            Alert.alert('Please enter your zip code');
            return;
        }
        navigation.navigate('Thank You')
    }

    return(
        <ScrollView style={styles.root}>
            <View style={styles.row}>
                <Picker selectedValue={country} onValueChange={setCountry}>
                    <Picker.Item value= 'Philippines' label = 'Philippines'/>
                </Picker>
            </View>

            {/*Full Name*/}
            <View style={styles.row}>
                <Text style={styles.label}>Full Name (First & Last Name)</Text>
                <CustomInput 
                    placeholder="Juan Dela Cruz"
                    value={fullName}
                    setValue={setFullName}
                />
            </View>

            {/*Phone Number*/}
            <View style={styles.row}>
                <Text style={styles.label}>Phone Number</Text>
                <CustomInput 
                    placeholder="+63 XXXXXXXXXX"
                    value={phone}
                    setValue={setPhone}
                    inputMode='numeric'
                />
            </View>

            {/*Address*/}
            <View style={styles.row}>
                <Text style={styles.label}>Address</Text>
                <CustomInput 
                    onEndEditing={validateAddress}
                    placeholder="Address"
                    value={address}
                    setValue={text => {
                        setAddress(text); 
                        setAddressError('');
                    }}
                />
                {!!addressError && (
                    <Text style={styles.errorLabel}>{addressError}</Text>
                )}
            </View>

            {/*City*/}
            <View style={styles.row}>
                <Text style={styles.label}>City</Text>
                <CustomInput 
                    placeholder="City"
                    value={city}
                    setValue={setCity}
                />
            </View>

            {/*Province & Postal*/}
            <View style={styles.row}>
                <View style={styles.container}>
                    <View style={styles.province}>
                        <Text style={styles.label}>Province</Text>
                        <Picker selectedValue={province} onValueChange={setProvince}>
                            <Picker.Item value= 'Batanes' label = 'Batanes'/>
                            <Picker.Item value= 'Laguna' label = 'Laguna'/>
                            <Picker.Item value= 'Central Luzon' label = 'Central Luzon'/>
                            <Picker.Item value= 'Cebu' label = 'Cebu'/>
                            <Picker.Item value= 'NCR' label = 'NCR'/>
                            <Picker.Item value= 'Iloilo' label = 'Iloilo'/>
                            <Picker.Item value= 'Aurora' label = 'Aurora'/>
                            <Picker.Item value= 'Cagayan' label = 'Cagayan'/>
                            <Picker.Item value= 'Isabela' label = 'Isabela'/>
                            <Picker.Item value= 'Pampanga' label = 'Pampanga'/>
                            <Picker.Item value= 'Quezon' label = 'Quezon'/>
                            <Picker.Item value= 'Bulacan' label = 'Bulacan'/>
                        </Picker>
                    </View>
                    <View style={styles.zipCode}>
                        <Text style={styles.label}>Zip Code</Text>
                        <CustomInput 
                            placeholder="xxxx"
                            value={zipCode}
                            setValue={setZipCode}
                            inputMode="numeric"
                        />
                    </View>
                </View>
            </View>
            <SemiRectangleButton 
                onPress={onCheckOutPress}
                text='Checkout'
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        marginTop: 35,
        padding: 15,
    },
    row: {
        marginVertical: 5,

    },
    label: {
        fontWeight: 'bold',

    },
    container: {
        flexDirection: 'row',
    },
    province: {
        width: '50%',
    },
    zipCode: {
        width: '50%',
    },
    checkout: {
        borderRadius: 50,
    },
    errorLabel: {
        color: 'red',
    },
})

export default AddressScreen;
