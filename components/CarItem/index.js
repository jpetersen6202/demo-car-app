import { Text, View, ImageBackground, Alert } from "react-native";
import { useContext } from "react";
import styles from './styles'
import StyledButton from "../StyledButton";

const CarItem = (props) => {
    const {name, tagline, price, taglineCTA, image} = props.car
    const setInCart = props.setInCart

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

    function addToCart(model, price) {
        setInCart(prevCart => {
            return [...prevCart, {model: model, price: price}]
        })
    }

    return (
        <View style={styles.carContainer}>
        
            <ImageBackground
                source={image}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {`${tagline}${price} `}
                    <Text style={styles.subtitleCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <StyledButton 
                    type='primary'
                    content='Custom Order'
                    onPress={() => {
                        createAlert('Custom Order Was Pressed', `Demo button on ${name}`)
                    }}
                />

                <StyledButton 
                    type='secondary'
                    content='Add Stock Model To Cart'
                    onPress={() => {
                        addToCart(name, price)
                        createAlert(`Stock ${name} has been added to cart.`)
                    }}
                />
            </View>
            
        </View>
    );
}

export default CarItem