import { View, Text, Pressable, Alert } from "react-native";
import style from "./styles";
import styles from "./styles"

const CartItem = ({model, price, setInCart, navigation}) => {
    
    function createAlert(title, message) {
        return Alert.alert(
            title,
            message,
            [
                {
                    text: "Okay",
                }
            ]
        )
    }
    
    function removeFromCart(model) {
        setInCart(prevCart => {
            return prevCart.filter(item => (
                item.model !== model
            ))
        })
        createAlert(`${model} removed from cart`, '')
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Text style={style.text}>{`${model} - ${price}`}</Text>
            <Pressable onPress={() => removeFromCart(model)} style={styles.button}>
                <Text style={styles.buttonText}>X</Text>
            </Pressable>
        </View>
    );
}

export default CartItem;