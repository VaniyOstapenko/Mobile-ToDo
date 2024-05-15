import { Text, View, TextInput } from 'react-native';
import styles from './style'

export default function Reg({ navigation }) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome back</Text>
                <Text>Let’s help to meet up your tasks.</Text>
                <TextInput style={styles.input} placeholder='Enter your full name' />
                <TextInput style={styles.input} placeholder='Enter your Email' />
                <TextInput style={styles.input} placeholder='Enter Password' />
                <TextInput style={styles.input} placeholder='Confirm password' />
                <Text style={styles.button} onPress={() => navigation.navigate('Auth')}>Register</Text>
                <Text >Already have an account ? <Text style={styles.sign}>Sign In</Text></Text>
            </View>
        </View>
    );
}


