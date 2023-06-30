import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 5,
        backgroundColor: '#fff',
        marginVertical: 5,
    },
    row: {
        flexDirection: 'row', 
    },
    quantityContainer: {
        marginVertical: 7,
        marginLeft: 14,
    },
    image: {
        marginLeft: 10,
        flex: 2,
        height: 150,
        resizeMode: 'contain',
    },
    title: {
        width: '100%',
        fontSize: 15,
    },
    price: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    oldPrice: {
        fontSize: 11,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
        
    },
    rightContainer: {
        padding: 10,
        flex: 3,
    },
    ratingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    star: {
        margin: 2,
    },

});

export default styles;
