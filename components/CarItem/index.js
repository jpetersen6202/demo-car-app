import { Text, View, ImageBackground } from "react-native";
import styles from './styles'
import StyledButton from "../StyledButton";

const CarItem = () => {
    return (
        <View style={styles.carContainer}>
        
            <ImageBackground
                source={require('../../assets/images/ModelS.jpeg')}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting at $94,990</Text>
            </View>

            <StyledButton 
                type='primary'
                content='Custom Order'
                onPress={() => {
                    console.warn('custom order was pressed')
                }}
            />

            <StyledButton 
                type='secondary'
                content='Existing Inventory'
                onPress={() => {
                    console.warn('existing inventory was pressed')
                }}
            />
        </View>
    );
}

export default CarItem