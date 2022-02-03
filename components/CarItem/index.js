import { Text, View, ImageBackground, Alert } from "react-native";
import styles from './styles'
import StyledButton from "../StyledButton";

const CarItem = (props) => {
    const {name, tagline, taglineCTA, image} = props.car

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

    return (
        <View style={styles.carContainer}>
        
            <ImageBackground
                source={image}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline + ' '}
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
                    content='Existing Inventory'
                    onPress={() => {
                        createAlert('Existing Inventory Was Pressed', `Demo button on ${name}`)
                    }}
                />
            </View>
            
        </View>
    );
}

export default CarItem