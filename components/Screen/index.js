import { View, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';
import CarsList from "../CarsList";
import Header from "../Header";

const Screen = ({ route, navigation }) => {
    const make = route.params?.make ?? 'Default value'
    const setInCart = route.params?.setInCart ?? ((trySet) => `default func: ${trySet}`)
    const inCart = route.params?.inCart ?? [{model: 'default fall back', price: '$1'}]
    
    return (
        <View style={styles.container}>
        
            <Header navigation={navigation} make={make}/>
            <CarsList make={make} setInCart={setInCart}/>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    }
});

export default Screen;