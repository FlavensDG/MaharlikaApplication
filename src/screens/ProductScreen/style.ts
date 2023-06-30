import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        marginTop: 30,
        padding: 20,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    oldPrice: {
        fontSize: 15,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
    },
    desciption: {
        marginVertical: 10,
        lineHeight: 20,
        
    },
    buttonPos: {
        alignItems: 'center',
        paddingBottom: 45,
    },

});

export default styles;
