import { StyleSheet, Dimensions} from "react-native";

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    button: {
        height: 25,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 12,
    },

    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'red'
    },

    text: {
        textAlign: 'center',
    },
})

export default style