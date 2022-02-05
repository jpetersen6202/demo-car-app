import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({  
    carContainer: {
      width: '100%',
      height: Dimensions.get('window').height,
    },
  
    titles: {
      marginTop: '30%',
      width: '100%',
      alignItems: 'center',
    },
    
    title: {
      fontSize: 40,
      fontWeight: '500',
    },
  
    subtitle: {
      fontSize: 16,
      color: '#5c5e62'
    },

    subtitleCTA: {
      fontSize: 16,
      textDecorationLine: 'underline',
      color: '#5c5e62'
    },
  
    image: {
      width:'100%',
      height:'100%',
      resizeMode: 'cover',
      position: 'absolute',
    },

    buttonsContainer: {
      position: 'absolute',
      bottom: 50,
      width: '100%'
    },

    backgroundVideo: {
      height: Dimensions.get('window').height,
      position: "absolute",
      top: 0,
      left: 0,
      alignItems: "stretch",
      bottom: 0,
      right: 0
    }
  });

  export default styles