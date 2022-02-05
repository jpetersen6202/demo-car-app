import { Text, View, Alert, FlatList } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";
import CartItem from "../CartItem";


const Cart = ({ navigation, route }) => {
    const inCart = route.params?.inCart ?? 'Default value'
    const setInCart = route.params?.setInCart ?? (() => 'default function')
    
    return (
        <View style={styles.container}>
            
            <FlatList 
                data={inCart}
                renderItem={({item}) => (<CartItem model={item.model} key={item.model} price={item.price} setInCart={setInCart} navigation={navigation}/>)}
                showsVerticalScrollIndicator={false}
                decelerationRate={'fast'}
            />
            
            
            <View style={styles.footer}>
                <StyledButton type={'primary'} content={'Go back!'} onPress={() => navigation.goBack()} />
                <StyledButton
                    type={'secondary'}
                    content={'Checkout'}
                    onPress={() => Alert.alert(
                        'Checkout Pressed',
                        '',
                        [
                            {
                                text: "Okay",
                            }
                        ]
                    )} />
            </View>
        </View>
    );
}

export default Cart;