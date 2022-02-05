import { View, FlatList, Dimensions, Text } from "react-native";
import styles from "./styles";
import cars from "./cars"
import jeeps from "./jeeps"
import CarItem from "../CarItem"

const CarsList = ({make, setInCart, inCart}) => {        
    let carData
    switch (make) {
        case 'Tesla':
            carData = cars
            break
        case 'Jeep':
            carData = jeeps
            break
        default:
            carData = 'Make not found'
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={carData}
                renderItem={({item}) => (<CarItem car={item} key={item.name} setInCart={setInCart}/>)}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
}

export default CarsList;