import { Text, View, ImageBackground } from "react-native";
import styles from './styles'

const CarItem = () => {
    return (
        <View style={styles.carContainer}>
        
            <ImageBackground
                source={require('../../assets/images/ModelS.jpeg')}
                style={styles.image}
            >
                <View style={styles.titles}>
                    <Text style={styles.title}>Model S</Text>
                    <Text style={styles.subtitle}>Starting at $94,990</Text>
                </View>
            </ImageBackground>

        </View>
    );
}

export default CarItem