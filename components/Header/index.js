import { Image, Pressable, View } from "react-native";
import styles from "./styles";

const Header = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
            <Pressable onPress={() => navigation.toggleDrawer()}>
                <Image style={styles.menu} source={require('../../assets/images/menu.png')} />
            </Pressable>
        </View>
    );
}

export default Header;