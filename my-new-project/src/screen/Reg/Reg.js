import { Text, View, TextInput } from 'react-native';
import styles from './style'
import * as Font from 'expo-font'
import { useEffect } from 'react';

const loadFont = async () => {
    await Font.loadAsync({
        Poppins400: require('../../assets/fonts/Poppins-Regular.ttf'),
        Poppins600: require('../../assets/fonts/Poppins-SemiBold.ttf'),
        Poppins700: require('../../assets/fonts/Poppins-Bold.ttf')
    })
}

export default function Reg({ navigation }) {
    useEffect(() => {
        loadFont();
    }, []);

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to Onboard! </Text>
                <Text style={styles.help}>Let’s help to meet up your tasks.</Text>
                <TextInput style={styles.input} placeholder='Enter your full name' />
                <TextInput style={styles.input} placeholder='Enter your Email' />
                <TextInput style={styles.input} placeholder='Enter Password' />
                <TextInput style={styles.input} placeholder='Confirm password' />
                <Text style={styles.button} onPress={() => navigation.navigate('Auth')}>Register</Text>
                <Text style={styles.already}>Already have an account ? <Text style={styles.sign}>Sign In</Text></Text>
            </View>
        </View>
    );
}


