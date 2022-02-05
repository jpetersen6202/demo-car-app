import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height-100,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 100
    },

    text: {
        textAlign: 'center',
    },

    footer: {
        position: 'absolute',
        bottom: 50,
        zIndex: 100,
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20
    }
})

export default styles