import { View, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';
import CarsList from "../CarsList";
import Header from "../Header";

const Screen = ({ navigation }) => {
    return (
        <View style={styles.container}>
        
            <Header navigation={navigation}/>
            <CarsList />

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