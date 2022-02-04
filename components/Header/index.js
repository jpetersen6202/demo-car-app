import { Image, Pressable, View } from "react-native";
import styles from "./styles";

const Header = ({ navigation, make }) => {
    const isTesla = make === 'Tesla'
    
    return (
        <View style={styles.container}>
            {isTesla && <Image style={styles.logo} source={require('../../assets/images/logo.png')} />}
            {!isTesla && <Image style={styles.jeepLogo} source={require('../../assets/images/jeepLogo.png')} />}
            <Pressable onPress={() => navigation.toggleDrawer()}>
                <Image style={styles.menu} source={require('../../assets/images/menu.png')} />
            </Pressable>
        </View>
    );
}

export default Header;