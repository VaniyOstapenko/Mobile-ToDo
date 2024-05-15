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
                <Button onPress={() => navigation.navigate('Reg')} title='Get Started'></Button>
            </View>
        </View>
    );
}


