import { Text, View, Button, Image, TextInput } from 'react-native';
import styles from './style'

export default function Reg({ navigation }) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Text>Welcome back</Text>
                <Image style={styles.img} source={require('../../assets/AuthPicture.svg')} />
                <TextInput style={styles.input} placeholder='Enter your Email' />
                <TextInput style={styles.input} placeholder='Enter Password' />
                <Text style={styles.forget}>Forget password ?</Text>
                <Text style={styles.button} >Login</Text>
                <Text onPress={() => navigation.navigate('Reg')}>Don’t have an account ? <Text>Sign Up</Text></Text>
            </View>
        </View>
    );
}


