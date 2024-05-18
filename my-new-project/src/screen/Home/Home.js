import { Text, View, Button, Image } from 'react-native';
import styles from './style'
import Img from '../../assets/landing.png'

export default function Home({ navigation }) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Image style={styles.img} source={Img} />
                <Text>Gets things with TODs</Text>
                <Text>Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod. Consequat urna quam felis interdum quisque. Malesuada adipiscing tristique ut eget sed.</Text>
                <Text style={styles.button} onPress={() => navigation.navigate('Reg')}>Get Started</Text>
            </View>
        </View>
    );
}


