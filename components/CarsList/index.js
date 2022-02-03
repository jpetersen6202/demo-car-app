import { View, FlatList, Dimensions } from "react-native";
import styles from "./styles";
import cars from "./cars"
import CarItem from "../CarItem"
import uuid from "react-uuid";

const CarsList = () => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={cars}
                renderItem={({item}) => (<CarItem car={item} key={uuid()}/>)}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
}

export default CarsList;