import { Text, View, ImageBackground, Alert } from "react-native";
import { useContext } from "react";
import styles from './styles'
import StyledButton from "../StyledButton";
import Video from "react-native-video";

const CarItemVideo = ({navigation, route}) => {
    const name = route.params?.name ?? 'Default name'
    const tagline = route.params?.tagline ?? 'Default tagline'
    const price = route.params?.price ?? 'Default price'
    const taglineCTA = ''

    function createAlert(title, message) {
        return Alert.alert(
            title,
            message,
            [
                {
                    text: "Okay",
                }
            ]
        )
    }

    function addToCart(model, price) {
        return `No function on this demo page.`
    }

    return (
        <View style={styles.carContainer}>
        
            {/* <ImageBackground
                source={image}
                style={styles.image}
            /> */}

            <Video
                source={require('../../assets/video/videoDemo.mp4')}
                style={styles.backgroundVideo}
                muted={true}
                repeat={true}
                resizeMode={"cover"}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {`${tagline}${price} `}
                    <Text style={styles.subtitleCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <StyledButton 
                    type='primary'
                    content='Custom Order'
                    onPress={() => {
                        createAlert('Custom Order Was Pressed', `Demo button on ${name}`)
                    }}
                />

                <StyledButton 
                    type='secondary'
                    content='Add Stock Model To Cart'
                    onPress={() => {
                        addToCart(name, price)
                        createAlert(`No function on this demo page.`)
                    }}
                />
            </View>
            
        </View>
    );
}

export default CarItemVideo