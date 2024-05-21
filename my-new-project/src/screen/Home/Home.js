import { Text, View, Image } from 'react-native';
import styles from './style'
import Img from '../../assets/landing.png'
import * as Font from 'expo-font'
import { useEffect } from 'react';

const loadFont = async () => {
    await Font.loadAsync({
        Poppins400: require('../../assets/fonts/Poppins-Regular.ttf'),
        Poppins600: require('../../assets/fonts/Poppins-SemiBold.ttf'),
        Poppins700: require('../../assets/fonts/Poppins-Bold.ttf')
    })
}

export default function Home({ navigation }) {
    useEffect(() => {
        loadFont();
    }, []);

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Image style={styles.img} source={Img} />
                <Text style={styles.gets}>Gets things with TODs</Text>
                <Text style={styles.lorem}>Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod. Consequat urna quam felis interdum quisque. Malesuada adipiscing tristique ut eget sed.</Text>
                <Text style={styles.button} onPress={() => navigation.navigate('Reg')}>Get Started</Text>
            </View>
        </View>
    );
}


