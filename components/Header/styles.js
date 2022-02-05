import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20
    },

    logoContainer: {
        flexDirection: 'row',
    },

    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain'
    },

    jeepLogo: {
        width: 120,
        height: 35,
        resizeMode: 'contain'
    },

    menu: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },

    cart: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        paddingHorizontal: 30
    }
})

export default styles